import { Controller, UseGuards, Get, Request, NotFoundException } from '@nestjs/common';
import { Repository, } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { lensProp, view, ifElse, isNil, T, identity, omit } from 'ramda';

import UserEntity from './user.entity';
import { IUserEntity } from './types';
import SettingEntity from '../setting/setting.entity';

import {
  USER,
  USERS,
  USER_CONTACT,
  USER_CONTACTS,
  USER_ROLE,
  USER_ROLES,
} from '../../constants/routes';
import { ContactType } from '../../constants/entities';
import { FastifyRequestWithJWTUser } from '../auth/types';
import ContactEntity from '../contact/contact.entity';

const isEmailVisibleLens = lensProp('setting_is_email_visible');
const isPhoneVisibleLens = lensProp('setting_is_phone_visible');
const normalizeSetting = ifElse(isNil, T, identity);
const getSafeSettingValue = (lens, data) => normalizeSetting(view(lens, data))

@Controller()
@UseGuards(AuthGuard('jwt'))
export default class UserController {
  constructor(
    @InjectRepository(UserEntity)
    private readonly users: Repository<UserEntity>,
  ) {}

  @Get(USER)
  public async getUser(
    @Request() req: FastifyRequestWithJWTUser,
  ): Promise<Omit<IUserEntity, 'password'>> {
    const { raw, entities } = await this.users.createQueryBuilder('user')
      .where({ id: req.user.id })
      .leftJoinAndSelect(ContactEntity, 'contact', '"user"."id" = "contact"."user_id"')
      .leftJoinAndSelect(SettingEntity, 'setting', '"user"."id" = "setting"."user_id"')
      .getRawAndEntities();

    if (!entities.length) {
      throw new NotFoundException();
    }

    const contactsVisibility = {
      [ContactType.Email]: getSafeSettingValue(isEmailVisibleLens, raw[0]),
      [ContactType.Phone]: getSafeSettingValue(isPhoneVisibleLens, raw[0]),
    };
    
    entities[0].contacts = raw
      .filter((result) => !!contactsVisibility[result['contact_contact_type']])
      .map((result) => ({
        id: result['contact_id'],
        contactType: result['contact_contact_type'],
        value: result['contact_value'],
      }));
  
    return omit(['password'], entities[0]);
  }

  @Get(USERS)
  public getUsers() {}

  @Get(USER_CONTACT)
  public getUserContact() {}

  @Get(USER_CONTACTS)
  public getUserContacts() {}

  @Get(USER_ROLE)
  public getUserRole() {}

  @Get(USER_ROLES)
  public getUserRoles() {}
}
