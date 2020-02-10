import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import DatabaseModule from './modules/database/database.module';
import DictionaryModule from './modules/dictionary/dictionary.module';
import UserEntity from './modules/user/user.entity';
import ContactModule from './modules/contact/contact.module';
import FavoriteModule from './modules/favorite/favorite.module';
import RoleModule from './modules/role/role.module';
import SettingEntity from './modules/setting/setting.entity';

@Module({
  imports: [
    DatabaseModule,
    DictionaryModule,
    UserEntity,
    ContactModule,
    FavoriteModule,
    RoleModule,
    SettingEntity,
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}
