import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy, AuthGuard } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

import { IUserEntity } from '../../user/types';
import AuthService from '../auth.service';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  public async validate(
    payload: Pick<
      IUserEntity, 'id' | 'username' | 'verified'
    >,
  ) {
    const isBlacklisted = await this.authService.isUserBlacklisted(payload);

    if (isBlacklisted) {
      throw new UnauthorizedException();
    }

    return payload;
  }
}
