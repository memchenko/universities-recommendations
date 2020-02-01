import { IDictionaryItemEntity } from '../dictionary/types';
import { Dictionary } from '../../constants/entities';

export interface PrivilegedEntity {
    userId: number;
    privilege: IDictionaryItemEntity<Dictionary.PrivilegeType>;
}