import { IDictionaryItemEntity } from '../dictionary/types';
import { Dictionary } from '../../constants/entities';

export interface IEnrolleeScoreEntity {
    id: number;
    userId: number;
    subject: IDictionaryItemEntity<Dictionary.Subject>;
    value: number;
}