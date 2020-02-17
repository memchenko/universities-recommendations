import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import ContactEntity from './contact.entity';

@Injectable()
export default class ContactService extends TypeOrmCrudService<ContactEntity> {
  constructor(
    @InjectRepository(ContactEntity)
    readonly repository: Repository<ContactEntity>,
  ) {
    super(repository);
  }
}
