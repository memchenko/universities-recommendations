import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import UserEntity from './user.entity';

@Injectable()
export default class UserService extends TypeOrmCrudService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    readonly repository: Repository<UserEntity>,
  ) {
    super(repository);
  }
}
