import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import UniversityEntity from './university.entity';

@Injectable()
export default class UniversityService extends TypeOrmCrudService<UniversityEntity> {
    constructor(
        @InjectRepository(UniversityEntity)
        readonly repository: Repository<UniversityEntity>,
    ) {
        super(repository);
    }
}