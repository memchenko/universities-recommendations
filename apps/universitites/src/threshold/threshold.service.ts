import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import ThresholdEntity from './threshold.entity';

@Injectable()
export default class ThresholdService extends TypeOrmCrudService<ThresholdEntity> {
    constructor(
        @InjectRepository(ThresholdEntity)
        readonly repository: Repository<ThresholdEntity>,
    ) {
        super(repository);
    }
}