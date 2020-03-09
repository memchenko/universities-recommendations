import { IUserEntity } from '../user/types';

export interface ISettingEntity {
  id: number;
  user: IUserEntity;
  isPhoneVisible: boolean;
  isEmailVisible: boolean;
}
