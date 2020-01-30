import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import SemecterEntity from './semecter.entity';

@Injectable()
export default class SemecterService extends TypeOrmCrudService<SemecterEntity>{
    constructor(
        @InjectRepository(SemecterEntity)
        readonly repository: Repository<SemecterEntity>,
    ) {
        super(repository);
    }
}
