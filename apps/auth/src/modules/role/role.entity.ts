import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
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

  @OneToMany(_ => PrivilegeEntity, privilege => privilege.roles)
  public privileges!: PrivilegeEntity[];
}
