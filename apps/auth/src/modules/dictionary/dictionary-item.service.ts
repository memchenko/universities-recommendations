import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Dictionary } from '../../constants/entities';

import DictionaryItemEntity from './dictionary-item.entity';

@Injectable()
export default class DictionaryItemService extends TypeOrmCrudService<
  DictionaryItemEntity<Dictionary>
> {
  constructor(
    @InjectRepository(DictionaryItemEntity)
    readonly repository: Repository<DictionaryItemEntity<Dictionary>>,
  ) {
    super(repository);
  }
}
