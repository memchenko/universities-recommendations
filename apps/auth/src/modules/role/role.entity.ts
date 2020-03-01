import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { IRoleEntity } from './types';
import PrivilegeEntity from './privilege/privilege.entity';

@Entity('role')
export default class RoleEntity implements IRoleEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  public title!: string;

  @ManyToMany(_ => PrivilegeEntity, {
    cascade: ['update'],
  })
  @JoinTable({
    name: 'role_privilege',
  })
  public privileges!: PrivilegeEntity[];
}
