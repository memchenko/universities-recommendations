import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import SemesterProgramEntity from './semester-program.entity';

@Injectable()
export default class SemesterProgramService extends TypeOrmCrudService<SemesterProgramEntity>{
    constructor(
        @InjectRepository(SemesterProgramEntity)
        readonly repository: Repository<SemesterProgramEntity>,
    ) {
        super(repository);
    }
}
