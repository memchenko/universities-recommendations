import { Entity, ManyToOne, Column } from 'typeorm';

import DictionaryEntity from './dictionary.entity';
import { IDictionaryItemEntity } from './types';

export const TABLE_NAME = 'dictionary_item';

@Entity(TABLE_NAME)
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