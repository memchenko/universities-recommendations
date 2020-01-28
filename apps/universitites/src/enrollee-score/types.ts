import { ITypeEntity } from '../static-tables/types';

export interface IEnrolleeScoreEntity {
    userId: number;
    subject: ITypeEntity;
    value: number;
}