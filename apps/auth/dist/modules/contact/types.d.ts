import { IDictionaryItemEntity } from '../dictionary/types';
import { Dictionary } from '../../constants/entities';
export interface IContactEntity {
    id: number;
    title: string;
    contactType: IDictionaryItemEntity<Dictionary.ContactType>;
}
