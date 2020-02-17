import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { IUserEntity } from './types';

@Injectable()
@Entity('user')
export default class UserEntity implements IUserEntity {
  @PrimaryColumn()
  public username!: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  public password!: string;

  @Column({
    type: 'bool',
    nullable: false,
    default: false,
  })
  public verified!: boolean;
}
