import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import DictionaryListEntity from './dictionary-list.entity';
import { IDictionaryEntity } from './types';

@Entity('dictionary')
export default class DictionaryEntity implements IDictionaryEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        unique: true,
    })
    public title!: string;

    @OneToMany(_ => DictionaryListEntity, item => item.dictionary)
    public items!: DictionaryListEntity;
}
