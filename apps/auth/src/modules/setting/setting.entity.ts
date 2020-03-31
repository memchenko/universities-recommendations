import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Injectable } from '@nestjs/common';

import { ISettingEntity } from './types';
import UserEntity from '../user/user.entity';

@Injectable()
@Entity('setting')
export default class SettingEntity implements ISettingEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({
    type: 'bool',
    nullable: false,
    default: true,
  })
  public isPhoneVisible!: boolean;

  @Column({
    type: 'bool',
    nullable: false,
    default: true,
  })
  public isEmailVisible!: boolean;

  @OneToOne(_ => UserEntity, {
    cascade: ['insert', 'update'],
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id'
  })
  public user!: UserEntity;

  @Column({
    type: 'int',
    nullable: false,
    unique: true,
  })
  public userId!: number;
}
