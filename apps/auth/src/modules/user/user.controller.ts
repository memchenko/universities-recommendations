import { Controller, UseGuards, Get, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IUserEntity } from './types';

import {
  USER,
  USERS,
  USER_CONTACTS,
} from '../../constants/routes';
import { FastifyRequestWithJWTUser } from '../auth/types';
import UserService from './user.service';
import { FastifyRequest } from 'fastify';


@Controller()
@UseGuards(AuthGuard('jwt'))
export default class UserController {
  constructor(
    private usersService: UserService,
  ) {}

  @Get(USER)
  public getUser(
    @Request() req: FastifyRequestWithJWTUser,
  ): Promise<Omit<IUserEntity, 'password'>> {
    return this.usersService.getUser(req.user.id);
  }

  @Get(USERS)
  public getUsers(
    @Request() req: FastifyRequest,
  ): Promise<Omit<IUserEntity, 'password'>[]> {
    const { limit, offset } = req.query;

    return this.usersService.getUsers(limit, offset);
  }

  @Get(USER_CONTACTS)
  public getUserContacts() {}
}
