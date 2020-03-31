import { IUserEntity } from '../user/types';

export interface IContactEntity {
  id: number;
  value: string;
  contactType: number;
  user?: IUserEntity;
  userId: number;
}

export interface IContactTypesResponse {
  [key: string]: number;
}

export interface IContactResponse extends Pick<
  IContactEntity, 'id' | 'value' | 'contactType'
> {} 
