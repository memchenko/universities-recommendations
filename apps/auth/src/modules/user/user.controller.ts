import { Controller, UseGuards, Get, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FastifyRequest } from 'fastify';

import { IUserEntity } from './types';
import UserService from './user.service';

import {
  USER,
  USERS,
  USER_CONTACTS,
} from '../../constants/routes';
import { IContactEntity } from '../contact/types';

@Controller()
@UseGuards(AuthGuard('jwt'))
export default class UserController {
  constructor(
    private usersService: UserService,
  ) {}

  @Get(USER)
  public getUser(
    @Request() req: FastifyRequest,
  ): Promise<Omit<IUserEntity, 'password'>> {
    return this.usersService.getUser(req.params.id);
  }

  @Get(USERS)
  public getUsers(
    @Request() req: FastifyRequest,
  ): Promise<{
    data: Omit<IUserEntity, 'password'>[],
    count: number,
    limit: number,
    offset: number,
  }> {
    const { limit, offset } = req.query;
    return this.usersService.getUsers(limit, offset);
  }

  @Get(USER_CONTACTS)
  public getUserContacts(
    @Request() req: FastifyRequest,
  ): Promise<IContactEntity[]> {
    return this.usersService.getContacts(req.params.id)
  }
}
