import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import FacultyEntity from './faculty.entity';

@Injectable()
export default class FacultyService extends TypeOrmCrudService<FacultyEntity> {
    constructor(
        @InjectRepository(FacultyEntity)
        readonly repository: Repository<FacultyEntity>,
    ) {
        super(repository);
    }
}