import { Entity, ManyToOne, Column } from 'typeorm';

import DictionaryEntity from './dictionary.entity';
import { IDictionaryItemEntity } from './types';

export const DICTIONARY_ITEM_TABLE = 'dictionary_item';

@Entity(DICTIONARY_ITEM_TABLE)
export default class DictionaryItemEntity<EntityType> implements IDictionaryItemEntity<EntityType> {
    @ManyToOne(_ => DictionaryEntity, dictionary => dictionary.items, {
        nullable: false,
        cascade: ['remove'],
    })
    public dictionary!: DictionaryEntity<EntityType>;

    @Column({
        type: 'varchar',
    })
    public title!: string;
}