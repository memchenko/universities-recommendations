import { ITypeEntity } from '../static-tables/types';

export interface PrivilegedEntity {
    userId: number;
    privilege: ITypeEntity;
}