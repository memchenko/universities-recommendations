import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { ITypeEntity } from './types';

@Entity('privilege_type')
export default class PrivilegeTypeEntity implements ITypeEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
    })
    public title!: string;
}