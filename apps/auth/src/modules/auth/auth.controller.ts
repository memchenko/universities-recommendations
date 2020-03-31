import {
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
  Body,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import AuthService from './auth.service';
import {
  Tokens,
  FastifyRequestWithJWTUser,
  FastifyRequestWithLoginData,
} from './types';

import { IUserEntity } from '../user/types';
import { LOGIN, SIGNIN, TOKEN, LOGOUT } from '../../constants/routes';

@Controller()
export default class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post(LOGIN)
  public async login(
    @Request() req: FastifyRequestWithLoginData,
  ): Promise<Tokens> {
    return this.authService.login(req.user);
  }

  @Post(SIGNIN)
  public async signin(
    @Body() body: Omit<IUserEntity, 'verified'>,
  ): Promise<Tokens> {
    return await this.authService.signin(body);
  }

  @UseGuards(AuthGuard('refresh'))
  @Get(TOKEN)
  public async getTokens(
    @Request() req: FastifyRequestWithJWTUser,
  ): Promise<Tokens> {
    const isBlacklisted = await this.authService.isUserBlacklisted(req.user);

    if (isBlacklisted) {
      throw new UnauthorizedException();
    }

    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(LOGOUT)
  public logout(
    @Request() req: FastifyRequestWithJWTUser,
  ): Promise<void> {
    return this.authService.logout(req.user);
  }

}