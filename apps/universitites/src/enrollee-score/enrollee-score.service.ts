import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import EnrolleeScoreEntity from './enrollee-score.entity';

@Injectable()
export default class EnrolleeScoreService extends TypeOrmCrudService<EnrolleeScoreEntity> {
    constructor(
        @InjectRepository(EnrolleeScoreEntity)
        readonly repository: Repository<EnrolleeScoreEntity>,
    ) {
        super(repository);
    }
}