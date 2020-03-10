import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { lensProp, ifElse, isNil, T, identity, view, omit, compose } from 'ramda';

import UserEntity from './user.entity';
import ContactEntity from '../contact/contact.entity';
import SettingEntity from '../setting/setting.entity';

import { ContactType } from '../../constants/entities';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { IUserEntity } from './types';

const getSafeSettingValue = compose(
  ifElse(
    isNil,
    T,
    identity,
  ),
  view,
);

const SETTINGS_LENSES = [
  [ContactType.Email, 'setting_is_email_visible'],
  [ContactType.Phone, 'setting_is_phone_visible'],
].map((entry) => ([
  entry[0],
  lensProp(entry[1])
]));

@Injectable()
export default class UserService extends TypeOrmCrudService<UserEntity> {
  private DEFAULT_PAGE_SIZE = 10;

  constructor(
    @InjectRepository(UserEntity)
    readonly users: Repository<UserEntity>,
  ) {
    super(users);
  }

  public async getUser(userId: number): Promise<Omit<IUserEntity, 'password'>> {
    const { raw, entities } = await this.users.createQueryBuilder('user')
      .where({ id: userId })
      .leftJoinAndSelect(ContactEntity, 'contact', '"user"."id" = "contact"."user_id"')
      .leftJoinAndSelect(SettingEntity, 'setting', '"user"."id" = "setting"."user_id"')
      .getRawAndEntities();

    if (!entities.length) {
      throw new NotFoundException();
    }

    const user = entities[0];
    const contactsVisibility = this.getContactsVisibility(user, raw);
    
    this.addContactsToUser(user, raw, contactsVisibility);
  
    return omit(['password'], user);
  }

  public async getUsers(
    limit: number = this.DEFAULT_PAGE_SIZE,
    offset: number = 0
  ): Promise<Omit<IUserEntity, 'password'>[]> {
    const { raw, entities } = await this.users.createQueryBuilder('user')
      .leftJoinAndSelect(ContactEntity, 'contact', '"user"."id" = "contact"."user_id"')
      .leftJoinAndSelect(SettingEntity, 'setting', '"user"."id" = "setting"."user_id"')
      .take(limit)
      .skip(offset)
      .getRawAndEntities();

    if (!entities.length) {
      return [];
    }

    return entities.map((user) => {
      const contactsVisibility = this.getContactsVisibility(user, raw);

      this.addContactsToUser(user, raw, contactsVisibility);

      return omit(['password'], user);
    });
  }

  private getContactsVisibility(
    user: Omit<IUserEntity, 'contacts'>,
    rawSQLResult: {
      user_id: number,
      setting_is_email_visible: boolean,
      setting_is_phone_visible: boolean,
    }[]
  ): { [key: string]: boolean } {
    const userSettings = rawSQLResult
      .filter((result) => result['user_id'] === user.id)[0];

    return SETTINGS_LENSES.reduce((acc, entry) => {
      acc[entry[0]] = getSafeSettingValue(entry[1], userSettings);
      return acc;
    }, {});
  }

  private addContactsToUser(
    user: Omit<IUserEntity, 'contacts'>,
    rawSQLResult: {
      contact_contact_type: ContactType,
      contact_id: number,
      contact_value: string,
      user_id: number,
    }[],
    contactsVisibility: { [key: string]: boolean, },
  ): IUserEntity {
    console.log(rawSQLResult);

    const res: IUserEntity = Object.assign(
      user,
      {
        contacts: rawSQLResult
          .filter((result) => (
            result['user_id'] === user.id
            && !!contactsVisibility[result['contact_contact_type']]))
          .map((result) => ({
            id: result['contact_id'],
            contactType: result['contact_contact_type'],
            value: result['contact_value'],
          }))
      }
    );

    return res;
  }
}
