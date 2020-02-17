import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Dictionary } from '../../constants/entities';

import DictionaryEntity from './dictionary.entity';

@Injectable()
export default class DictionaryService extends TypeOrmCrudService<
  DictionaryEntity<Dictionary>
> {
  constructor(
    @InjectRepository(DictionaryEntity)
    readonly repository: Repository<DictionaryEntity<Dictionary>>,
  ) {
    super(repository);
  }
}
