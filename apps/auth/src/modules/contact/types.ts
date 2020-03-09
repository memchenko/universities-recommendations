import { IUserEntity } from '../user/types';

export interface IContactEntity {
  id: number;
  value: string;
  contactType: number;
  user?: IUserEntity;
}
