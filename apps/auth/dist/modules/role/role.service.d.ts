import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import RoleEntity from './role.entity';
export default class RoleService extends TypeOrmCrudService<RoleEntity> {
    readonly repository: Repository<RoleEntity>;
    constructor(repository: Repository<RoleEntity>);
}
