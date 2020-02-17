import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import DictionaryItemEntity from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';

import { ISettingEntity } from './types';

@Entity('setting')
export default class SettingEntity implements ISettingEntity {
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
    name: 'setting_id',
  })
  public setting!: DictionaryItemEntity<Dictionary.Setting>;
}
