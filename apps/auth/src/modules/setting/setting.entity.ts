import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { ISettingEntity } from './types';
import UserEntity from '../user/user.entity';

@Entity('setting')
export default class SettingEntity implements ISettingEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({
    type: 'bool',
    nullable: false,
    default: false,
  })
  public isPhoneVisible!: boolean;

  @Column({
    type: 'bool',
    nullable: false,
    default: false,
  })
  public isEmailVisible!: boolean;

  @OneToOne(_ => UserEntity, {
    cascade: ['remove'],
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
  })
  public user!: UserEntity;
}
