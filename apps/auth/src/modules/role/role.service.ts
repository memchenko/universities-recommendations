import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import RoleEntity from './role.entity';

@Injectable()
export default class RoleService extends TypeOrmCrudService<RoleEntity>{
    constructor(
        @InjectRepository(RoleEntity)
        readonly repository: Repository<RoleEntity>,
    ) {
        super(repository);
    }
}
