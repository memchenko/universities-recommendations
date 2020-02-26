import { IUserEntity } from '../user/types';

export interface ISettingEntity {
  id: number;
  value: string;
  settingType: ISettingTypeEntity;
  user: IUserEntity;
}

export interface ISettingTypeEntity {
  id: number;
  title: string;
  settings: ISettingEntity[];
}
