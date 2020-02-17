import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import UserEntity from './user.entity';
export default class UserService extends TypeOrmCrudService<UserEntity> {
    readonly repository: Repository<UserEntity>;
    constructor(repository: Repository<UserEntity>);
}
