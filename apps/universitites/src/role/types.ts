import { IUniversityEntity } from '../university/types';

export interface IRoleEntity {
    id: number;
    title: string;
    university: IUniversityEntity;
}