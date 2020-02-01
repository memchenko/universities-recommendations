import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import DictionaryEntity from './dictionary.entity';

@Injectable()
export default class DictionaryService extends TypeOrmCrudService<DictionaryEntity>{
    constructor(
        @InjectRepository(DictionaryEntity)
        readonly repository: Repository<DictionaryEntity>,
    ) {
        super(repository);
    }
}
