import { Controller, Get, UseGuards, Request, Post, Body, Delete, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import ContactService from './contact.service';
import { IContactTypesResponse, IContactEntity, IContactResponse } from './types';

import { CONTACT_TYPES, OWN_CONTACTS, OWN_CONTACT } from '../../constants/routes';
import { FastifyRequestWithJWTUser } from '../auth/types';

@Controller()
@UseGuards(AuthGuard('jwt'))
export default class ContactController {
  constructor(readonly contacts: ContactService) {}

  @Get(CONTACT_TYPES)
  public getContactTypes(): IContactTypesResponse {
    return this.contacts.getContactTypes();
  }

  @Get(OWN_CONTACTS)
  public getOwnContacts(
    @Request() req: FastifyRequestWithJWTUser,
  ): Promise<IContactEntity[]> {
    return this.contacts.getOwnContacts(req.user.id);
  }

  @Post(OWN_CONTACTS)
  public createContact(
    @Request() req: FastifyRequestWithJWTUser,
    @Body() data: Pick<IContactEntity, 'contactType' | 'value'>,
  ): Promise<IContactResponse> {
    return this.contacts.createContact(req.user.id, data);
  }

  @Delete(OWN_CONTACT)
  public deleteContact(
    @Request() req: FastifyRequestWithJWTUser,
    @Param() params: { id: number },
  ): Promise<void> {
    return this.contacts.deleteContact(req.user.id, params.id);
  }
}