import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import { ISettingEntity } from './types';
import SettingTypeEntity from './setting-type/setting-type.entity';
import UserEntity from '../user/user.entity';

@Entity('setting')
export default class SettingEntity implements ISettingEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  public value!: string;

  @ManyToOne(_ => SettingTypeEntity, settingType => settingType.settings, {
    cascade: ['update'],
    nullable: false,
  })
  public settingType!: SettingTypeEntity;

  @ManyToOne(_ => UserEntity, user => user.settings, {
    cascade: ['remove'],
    nullable: false,
  })
  public user!: UserEntity;
}
