import DictionaryItemEntity from './dictionary-item.entity';
import { IDictionaryEntity } from './types';
export default class DictionaryEntity<EntityType> implements IDictionaryEntity<EntityType> {
    id: EntityType;
    title: string;
    items: DictionaryItemEntity<EntityType>;
}
