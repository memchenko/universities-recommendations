import {
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FastifyRequest } from 'fastify';

import { IUserEntity } from '../user/types';
import AuthService, { Tokens } from './auth.service';

type FastifyRequestWithUser = FastifyRequest & { user: IUserEntity };

@Controller()
export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  public login(@Request() req: FastifyRequestWithUser): Tokens {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  public getProfile(
    @Request() req: FastifyRequestWithUser,
  ): Omit<IUserEntity, 'password'> {
    return req.user;
  }

  @Post('signin')
  public async signin(
    @Body() body: Omit<IUserEntity, 'verified'>,
  ): Promise<Tokens> {
    return await this.authService.signin(body);
  }

  @UseGuards(AuthGuard('refresh'))
  @Get('token')
  public getTokens(@Request() req: FastifyRequestWithUser): Tokens {
    return this.authService.login(req.user);
  }
}
