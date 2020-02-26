import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import FavoriteEntity from '../favorite.entity';
import { IFavoriteTypeEntity } from '../types';

@Entity('favorite_type')
export default class FavoriteTypeEntity implements IFavoriteTypeEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        length: 100,
    })
    public title!: string;

    @OneToMany(_ => FavoriteEntity, favorite => favorite.favoriteType)
    public favorites!: FavoriteEntity[];
}
