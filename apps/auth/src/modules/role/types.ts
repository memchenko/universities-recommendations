export const enum PrivilegeType {
  Read = 'r',
  Write = 'w',
  ReadWrite = 'rw',
}

export interface IRoleEntity {
  id: number;
  title: string;
  privileges: IPrivilegeEntity[];
}

export interface IPrivilegeEntity {
  id: number;
  title: string;
  roles: IRoleEntity[];
}

export interface IRolePrivilegeEntity {
  id: number;
  role: IRoleEntity;
  privilege: IPrivilegeEntity;
  privilegeType: PrivilegeType;
}
