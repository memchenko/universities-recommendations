import DictionaryEntity from './dictionary.entity';
import { IDictionaryItemEntity } from './types';
export declare const DICTIONARY_ITEM_TABLE = "dictionary_item";
export default class DictionaryItemEntity<EntityType> implements IDictionaryItemEntity<EntityType> {
    id: number;
    dictionary: DictionaryEntity<EntityType>;
    title: string;
}
