import { ICompetitionEntity } from '../competition/types';
import { IDictionaryItemEntity } from '../dictionary/types';
import { Dictionary } from '../../constants/entities';

export interface IThresholdScoreEntity {
    id: number;
    competition: ICompetitionEntity;
    subject: IDictionaryItemEntity<Dictionary.Subject>;
    value: number;
}