import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import PrivilegeEntity from './privilege.entity';

@Injectable()
export default class PrivilegeService extends TypeOrmCrudService<PrivilegeEntity> {
    constructor(
        @InjectRepository(PrivilegeEntity)
        readonly repository: Repository<PrivilegeEntity>,
    ) {
        super(repository);
    }
}
