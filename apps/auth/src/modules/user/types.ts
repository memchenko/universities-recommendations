import { IContactEntity } from '../contact/types';

export interface IUserEntity {
  id: number;
  username: string;
  password: string;
  verified: boolean;
  contacts: IContactEntity[];
}
