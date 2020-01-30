import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import EnrolleeRewardEntity from './enrollee-reward.entity';

@Injectable()
export default class EnrolleeRewardService extends TypeOrmCrudService<EnrolleeRewardEntity> {
    constructor(
        @InjectRepository(EnrolleeRewardEntity)
        readonly repository: Repository<EnrolleeRewardEntity>,
    ) {
        super(repository);
    }
}