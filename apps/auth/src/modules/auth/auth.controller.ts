import {
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { IUserEntity } from '../user/types';
import AuthService, { Tokens } from './auth.service';
import { FastifyRequestWithLoginData } from './types';

@Controller()
export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  public login(@Request() req: FastifyRequestWithLoginData): Tokens {
    const loginRes = this.authService.login(req.user);

    return loginRes;
  }

  @Post('signin')
  public async signin(
    @Body() body: Omit<IUserEntity, 'verified'>,
  ): Promise<Tokens> {
    return await this.authService.signin(body);
  }

  @UseGuards(AuthGuard('refresh'))
  @Get('token')
  public getTokens(@Request() req: FastifyRequestWithLoginData): Tokens {
    return this.authService.login(req.user);
  }
}
