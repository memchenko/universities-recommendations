import { PrivilegeType } from '../../constants/entities';

export interface IRoleEntity {
  id: number;
  title: string;
  privileges: IPrivilegeEntity[];
}

export interface IPrivilegeEntity {
  id: number;
  object: string;
  accessType: PrivilegeType;
}
