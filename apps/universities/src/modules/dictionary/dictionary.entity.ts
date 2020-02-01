import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import DictionaryItemEntity from './dictionary-item.entity';
import { IDictionaryEntity } from './types';

@Entity('dictionary')
export default class DictionaryEntity<EntityType> implements IDictionaryEntity<EntityType> {
    @PrimaryGeneratedColumn({
        type: 'int',
    })
    public id!: EntityType;

    @Column({
        type: 'varchar',
        unique: true,
    })
    public title!: string;

    @OneToMany(_ => DictionaryItemEntity, item => item.dictionary)
    public items!: DictionaryItemEntity<EntityType>;
}
