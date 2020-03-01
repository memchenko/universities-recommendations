import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import AuthService from './auth.service';
import AuthController from './auth.controller';
import { jwtConstants } from './constants';
import LocalStrategy from './strategies/local.strategy';
import JwtStrategy from './strategies/jwt.strategy';
import RefreshStrategy from './strategies/refresh.strategy';
import PrivilegeGuard from './guards/privilege.guard';

import UserEntity from '../user/user.entity';
import UserModule from '../user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule.register({
      session: false,
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '30m',
      },
    }),
  ],
  exports: [AuthService, PrivilegeGuard],
  providers: [AuthService, LocalStrategy, JwtStrategy, RefreshStrategy, PrivilegeGuard],
  controllers: [AuthController],
})
export default class AuthModule {}
