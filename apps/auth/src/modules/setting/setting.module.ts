import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import SettingEntity from './setting.entity';
import SettingService from './setting.service';
import SettingController from './setting.controller';
import SettingTypeEntity from './setting-type/setting-type.entity';
import SettingTypeService from './setting-type/setting-type.service';
import SettingTypeController from './setting-type/setting-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SettingEntity, SettingTypeEntity])],
  exports: [SettingService, SettingTypeService],
  providers: [SettingService, SettingTypeService],
  controllers: [SettingController, SettingTypeController],
})
export default class SettingModule {}
