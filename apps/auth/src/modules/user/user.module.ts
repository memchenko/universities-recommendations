import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import UserEntity from './user.entity';
import UserService from './user.service';
import UserController from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [UserService, UserEntity],
  providers: [UserService, UserEntity],
  controllers: [UserController],
})
export default class UserModule {}
