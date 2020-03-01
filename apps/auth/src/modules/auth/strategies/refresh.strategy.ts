import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-jwt';
import { omit } from 'ramda';

import { jwtConstants } from '../constants';
import { IUserEntity } from '../../user/types';
import UserService from '../../user/user.service';

@Injectable()
export default class RefreshStrategy extends PassportStrategy(
  Strategy,
  'refresh',
) {
  constructor(private readonly usersService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Refresh'),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  public async validate({
    username,
  }: {
    username: string;
  }): Promise<Omit<IUserEntity, 'password'>> {
    const user = await this.usersService.findOne(username);

    if (!user) {
      throw new UnauthorizedException();
    }

    return omit(user, 'password');
  }
}
