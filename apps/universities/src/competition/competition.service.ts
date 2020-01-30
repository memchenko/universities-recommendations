import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

import CompetitionEntity from './competition.entity';

@Injectable()
export default class CompetitionService extends TypeOrmCrudService<CompetitionEntity> {
    constructor(
        @InjectRepository(CompetitionEntity)
        readonly repository: Repository<CompetitionEntity>, 
    ) {
        super(repository);
    }
}