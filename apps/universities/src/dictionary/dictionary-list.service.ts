import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import DictionaryListEntity from './dictionary-list.entity';

@Injectable()
export default class DictionaryListService extends TypeOrmCrudService<DictionaryListEntity> {
    constructor(
        @InjectRepository(DictionaryListEntity)
        readonly repository: Repository<DictionaryListEntity>,
    ) {
        super(repository);
    }
} 
