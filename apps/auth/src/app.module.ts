import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

import DatabaseModule from './modules/database/database.module';
import UserEntity from './modules/user/user.entity';
import ContactModule from './modules/contact/contact.module';
import SettingEntity from './modules/setting/setting.entity';
import AuthModule from './modules/auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    UserEntity,
    ContactModule,
    SettingEntity,
    AuthModule,
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: join(__dirname, '..', '.dev.env'),
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
