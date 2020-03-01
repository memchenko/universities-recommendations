import { Controller, UseGuards, Get, Request } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';

import UserEntity from './user.entity';

import {
  USER,
  USERS,
  USER_CONTACT,
  USER_CONTACTS,
  USER_ROLE,
  USER_ROLES,
} from '../../constants/routes';
import { FastifyRequestWithJWTUser } from '../auth/types';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export default class UserController {
  constructor(
    @InjectRepository(UserEntity)
    private readonly users: Repository<UserEntity>,
  ) {}

  @Get(USER)
  public getUser(
    @Request() req: FastifyRequestWithJWTUser,
  ) {
    const user = this.users.findOne(req.params.id);
  }

  @Get(USERS)
  public getUsers() {}

  @Get(USER_CONTACT)
  public getUserContact() {}

  @Get(USER_CONTACTS)
  public getUserContacts() {}

  @Get(USER_ROLE)
  public getUserRole() {}

  @Get(USER_ROLES)
  public getUserRoles() {}
}
