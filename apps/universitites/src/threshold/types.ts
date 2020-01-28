import { ICompetitionEntity } from '../competition/types';
import { ITypeEntity } from '../static-tables/types';

export interface IThresholdEntity {
    competition: ICompetitionEntity;
    subject: ITypeEntity;
    value: number;
}