import { Entity, ManyToOne, Column } from 'typeorm';

import DictionaryEntity from './dictionary.entity';
import { IDictionaryListEntity } from './types';

@Entity('dictionary-list')
export default class DictionaryListEntity implements IDictionaryListEntity {
    @ManyToOne(_ => DictionaryEntity, dictionary => dictionary.items, {
        nullable: false,
        cascade: ['remove'],
    })
    public dictionary!: DictionaryEntity;

    @Column({
        type: 'varchar',
    })
    public item!: string;
}