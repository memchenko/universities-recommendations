import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from 'nestjs-redis';
import { ConfigService } from '@nestjs/config';

import AuthService from './auth.service';
import AuthController from './auth.controller';
import LocalStrategy from './strategies/local.strategy';
import JwtStrategy from './strategies/jwt.strategy';
import RefreshStrategy from './strategies/refresh.strategy';

import UserEntity from '../user/user.entity';
import UserModule from '../user/user.module';
import SettingModule from '../setting/setting.module';
import SettingEntity from '../setting/setting.entity';

@Module({
  imports: [
    UserModule,
    SettingModule,
    TypeOrmModule.forFeature([UserEntity, SettingEntity]),
    PassportModule.register({
      session: false,
    }),
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: {
          expiresIn: '1m',
        },
      }),
      inject: [ConfigService],
    }),
    RedisModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        host: config.get('REDIS_HOST'),
        port: parseInt(config.get('REDIS_PORT')),
        db: parseInt(config.get('REDIS_DB')),
        password: config.get('REDIS_PASSWORD'),
        name: config.get('REDIS_NAME'),
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [AuthService],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    RefreshStrategy,
  ],
  controllers: [AuthController],
})
export default class AuthModule {}
