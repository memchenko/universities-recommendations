import { Controller, Get } from '@nestjs/common';

import ContactService from './contact.service';
import { ContactTypesResponse } from './types';

import { CONTACT_TYPES } from '../../constants/routes';

@Controller()
export default class ContactController {
  constructor(readonly contacts: ContactService) {}

  @Get(CONTACT_TYPES)
  public getContactTypes(): ContactTypesResponse {
    return this.contacts.getContactTypes();
  }
}