import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import PrivilegedEntity from './privileged.entity';

@Injectable()
export default class PrivilegedService extends TypeOrmCrudService<PrivilegedEntity> {
    constructor(
        @InjectRepository(PrivilegedEntity)
        readonly repository: Repository<PrivilegedEntity>,
    ) {
        super(repository);
    }
}