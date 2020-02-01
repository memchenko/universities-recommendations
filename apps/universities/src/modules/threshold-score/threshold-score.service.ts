import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import ThresholdScoreEntity from './threshold-score.entity';

@Injectable()
export default class ThresholdScoreService extends TypeOrmCrudService<ThresholdScoreEntity> {
    constructor(
        @InjectRepository(ThresholdScoreEntity)
        readonly repository: Repository<ThresholdScoreEntity>,
    ) {
        super(repository);
    }
}