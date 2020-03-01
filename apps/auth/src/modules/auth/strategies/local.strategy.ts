import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { omit } from 'ramda';

import AuthService from '../auth.service';

import UserService from '../../user/user.service';
import { IUserEntity } from '../../user/types'

@Injectable()
export default class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: UserService,
    private readonly authService: AuthService,
  ) {
    super();
  }

  public async validate(
    username: string,
    password: string,
  ): Promise<
    Pick<IUserEntity, 'id' | 'username' | 'verified' | 'roles'>
  > {
    const user = await this.usersService.findOne({
      where: { username },
      join: {
        alias: 'user',
        leftJoinAndSelect: {
          roles: 'user.roles',
          rolePrivilege: 'roles.privileges',
        },
      },
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
