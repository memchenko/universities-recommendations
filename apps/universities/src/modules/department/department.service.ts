import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import DepartmentEntity from './department.entity';

@Injectable()
export default class DepartmentService extends TypeOrmCrudService<DepartmentEntity> {
    constructor(
        @InjectRepository(DepartmentEntity)
        readonly repository: Repository<DepartmentEntity>,
    ) {
        super(repository);
    }
}