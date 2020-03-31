import { IUserEntity } from '../user/types';

export interface ISettingEntity {
  id: number;
  user: IUserEntity;
  isPhoneVisible: boolean;
  isEmailVisible: boolean;
  userId: number;
}

export interface IOwnSettingResponse extends Pick<
  ISettingEntity, 'isPhoneVisible' | 'isEmailVisible'
> {};