import { ICompetitionEntity } from '../competition/types';
import { ITypeEntity } from '../static-tables/types';

export interface IThresholdScoreEntity {
    competition: ICompetitionEntity;
    subject: ITypeEntity;
    value: number;
}