import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import UserEntity from './user.entity';
import UserService from './user.service';
import UserController from './user.controller';
import ContactEntity from '../contact/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ContactEntity])],
  exports: [UserService, UserEntity],
  providers: [UserService, UserEntity, ContactEntity],
  controllers: [UserController],
})
export default class UserModule {}
