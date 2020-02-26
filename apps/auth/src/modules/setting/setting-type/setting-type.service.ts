import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import SettingTypeEntity from './setting-type.entity';

@Injectable()
export default class SettingTypeService extends TypeOrmCrudService<
    SettingTypeEntity
> {
    constructor(
        @InjectRepository(SettingTypeEntity)
        readonly repository: Repository<SettingTypeEntity>,
    ) {
        super(repository);
    }
}