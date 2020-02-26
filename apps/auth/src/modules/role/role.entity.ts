import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

import { IRoleEntity } from './types';

@Entity('role')
export default class RoleEntity implements IRoleEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  public title!: string;
}
