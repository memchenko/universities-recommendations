import DictionaryItemEntity from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';
import { IContactEntity } from './types';
export default class ContactEntity implements IContactEntity {
    id: number;
    title: string;
    contactType: DictionaryItemEntity<Dictionary.ContactType>;
}
