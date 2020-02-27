import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { IPrivilegeEntity } from '../types';
import RoleEntity from '../role.entity';

@Entity('privilege')
export default class PrivilegeEntity implements IPrivilegeEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        length: 100,
    })
    public title!: string;

    @OneToMany(_ => RoleEntity, role => role.privileges)
    public roles!: RoleEntity[];
}
