import { IDictionaryItemEntity } from '../dictionary/types';
import { Dictionary } from '../../constants/entities';

export interface PrivilegedEntity {
    id: number;
    userId: number;
    privilege: IDictionaryItemEntity<Dictionary.PrivilegeType>;
}