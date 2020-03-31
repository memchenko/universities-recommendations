import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy, AuthGuard } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { omit } from 'ramda';

import AuthService from '../auth.service';
import { LoginData } from '../types';
import UserService from '../../user/user.service';

@Injectable()
export default class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(
    private readonly usersService: UserService,
    private readonly authService: AuthService,
  ) {
    super();
  }

  public async validate(
    username: string,
    password: string,
  ): Promise<LoginData> {
    const user = await this.usersService.findOne({
      where: { username },
    });

    if (
      !user ||
      !(await this.authService.isPasswordCorrect(password, user.password))
    ) {
      throw new UnauthorizedException();
    }

    return omit('password', user);
  }
}
