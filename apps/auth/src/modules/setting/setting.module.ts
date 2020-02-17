import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import SettingEntity from './setting.entity';
import SettingService from './setting.service';
import SettingController from './setting.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SettingEntity])],
  exports: [SettingService],
  providers: [SettingService],
  controllers: [SettingController],
})
export default class SettingModule {}
