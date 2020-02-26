import { ISettingEntity } from './types';
import SettingTypeEntity from './setting-type/setting-type.entity';
import UserEntity from '../user/user.entity';
export default class SettingEntity implements ISettingEntity {
    id: number;
    value: string;
    settingType: SettingTypeEntity;
    user: UserEntity;
}
