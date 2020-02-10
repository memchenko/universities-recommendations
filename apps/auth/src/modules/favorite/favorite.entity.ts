import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

import DictionaryItemEntity from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';

import { IFavoriteEntity } from './types';

@Entity('favorite')
export default class FavoriteEntity implements IFavoriteEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    public title!: string;

    @OneToOne(_ => DictionaryItemEntity, {
        cascade: ['update'],
        nullable: false,
    })
    @JoinColumn({
        name: 'favorite_type_id',
    })
    public favoriteType!: DictionaryItemEntity<Dictionary.FavoriteType>;
}
