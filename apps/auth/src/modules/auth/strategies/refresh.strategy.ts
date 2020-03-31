import { Injectable, UnauthorizedException, ExecutionContext } from '@nestjs/common';
import { PassportStrategy, AuthGuard } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-jwt';
import { omit } from 'ramda';
import { ConfigService } from '@nestjs/config';

import { IUserEntity } from '../../user/types';
import UserService from '../../user/user.service';

@Injectable()
export default class RefreshStrategy extends PassportStrategy(
  Strategy,
  'refresh',
) {
  constructor(
    private readonly usersService: UserService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  public async validate(
    { id }: Pick<IUserEntity, 'id'>
  ): Promise<Omit<IUserEntity, 'password'>> {
    const user = await this.usersService.findOne(id);

    if (!user) {
      throw new UnauthorizedException();
    }

    return omit(user, 'password');
  }
}
