import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import SettingEntity from './setting.entity';
export default class SettingService extends TypeOrmCrudService<SettingEntity> {
    readonly repository: Repository<SettingEntity>;
    constructor(repository: Repository<SettingEntity>);
}
