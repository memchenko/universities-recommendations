import { Entity, ManyToOne, Column } from 'typeorm';

import DictionaryEntity from './dictionary.entity';
import { IDictionaryItemEntity } from './types';

@Entity('dictionary_item')
export default class DictionaryListEntity implements IDictionaryItemEntity {
    @ManyToOne(_ => DictionaryEntity, dictionary => dictionary.items, {
        nullable: false,
        cascade: ['remove'],
    })
    public dictionary!: DictionaryEntity;

    @Column({
        type: 'varchar',
    })
    public title!: string;
}