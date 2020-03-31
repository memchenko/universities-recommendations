import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Transaction, TransactionManager, EntityManager } from 'typeorm';
import { pick } from 'ramda';

import { IContactTypesResponse, IContactEntity, IContactResponse } from './types';
import ContactEntity from './contact.entity';

import { ContactType } from '../../constants/entities';

const normalizeContact = pick(['id', 'contactType', 'value']);

@Injectable()
export default class ContactService {
  
  constructor(
    @InjectRepository(ContactEntity)
    private contacts: Repository<ContactEntity>,
  ) {}

  public getContactTypes(): IContactTypesResponse {
    const keys = Object.keys(ContactType).filter((key) => isNaN(+key));

    return keys.reduce((acc, key) => {
      acc[key] = Number(ContactType[key]);

      return acc;
    }, {});
  }

  public async getOwnContacts(userId: number): Promise<IContactEntity[]> {
    const contacts = await this.contacts.find({
      where: {
        userId,
      },
    });

    return contacts.map(normalizeContact);
  }

  @Transaction()
  public async createContact(
    userId: number,
    data: Pick<IContactEntity, 'contactType' | 'value'>,
    @TransactionManager() manager?: EntityManager,
  ): Promise<IContactResponse> {
    const { raw } = await manager.insert<IContactEntity>(ContactEntity, { userId, ...data });
    const res = await manager.findOne<IContactEntity>(ContactEntity, raw[0].id);

    return normalizeContact(res);
  }

  public async deleteContact(
    userId: number,
    contactId: number
  ): Promise<void> {
    const contact = await this.contacts.findOne(contactId);

    if (contact === undefined) {
      throw new NotFoundException();
    }

    if (contact.userId !== userId) {
      throw new UnauthorizedException();
    }

    await this.contacts.delete(contactId);
  }

}
