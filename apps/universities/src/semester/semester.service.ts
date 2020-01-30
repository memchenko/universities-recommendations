import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import SemesterEntity from './semester.entity';

@Injectable()
export default class SemesterService extends TypeOrmCrudService<SemesterEntity>{
    constructor(
        @InjectRepository(SemesterEntity)
        readonly repository: Repository<SemesterEntity>,
    ) {
        super(repository);
    }
}
