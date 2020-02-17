import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import SettingEntity from './setting.entity';

@Injectable()
export default class SettingService extends TypeOrmCrudService<SettingEntity> {
  constructor(
    @InjectRepository(SettingEntity)
    readonly repository: Repository<SettingEntity>,
  ) {
    super(repository);
  }
}
