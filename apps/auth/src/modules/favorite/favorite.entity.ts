import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import FavoriteTypeEntity from './favorite-type/favorite-type.entity';
import { IFavoriteEntity } from './types';

@Entity('favorite')
export default class FavoriteEntity implements IFavoriteEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  public value!: string;

  @ManyToOne(_ => FavoriteTypeEntity, favoriteType => favoriteType.favorites, {
    cascade: ['remove'],
    nullable: false,
  })
  public favoriteType!: FavoriteTypeEntity;
}
