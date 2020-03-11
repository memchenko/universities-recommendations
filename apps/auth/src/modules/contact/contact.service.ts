import { Injectable } from '@nestjs/common';

import { ContactType } from '../../constants/entities';
import { ContactTypesResponse } from './types';

@Injectable()
export default class ContactService {
  
  public getContactTypes(): ContactTypesResponse {
    const keys = Object.keys(ContactType).filter((key) => isNaN(+key));

    return keys.reduce((acc, key) => {
      acc[key] = Number(ContactType[key]);

      return acc;
    }, {});
  }

}
