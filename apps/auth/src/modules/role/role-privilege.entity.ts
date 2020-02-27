import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Check } from 'typeorm';

import { IRolePrivilegeEntity, PrivilegeType } from './types';
import RoleEntity from './role.entity';
import PrivilegeEntity from './privilege/privilege.entity';

const ALLOWED_VALUES = [
    PrivilegeType.Read,
    PrivilegeType.Write,
    PrivilegeType.ReadWrite,
].map(value => `'${value}'`).join(',');

@Entity('role_privilege')
@Check(`privilege_type IN (${ALLOWED_VALUES})`)
export default class RolePrivilegeEntity implements IRolePrivilegeEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
    })
    public privilegeType!: PrivilegeType;

    @ManyToOne(_ => RoleEntity, role => role.privileges, {
        cascade: ['remove'],
        nullable: false,
        primary: true,
    })
    public role!: RoleEntity;

    @ManyToOne(_ => PrivilegeEntity, privilege => privilege.roles, {
        cascade: ['remove'],
        nullable: false,
        primary: true,
    })
    public privilege!: PrivilegeEntity;
}