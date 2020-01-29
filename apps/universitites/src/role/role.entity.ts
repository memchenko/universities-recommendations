import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import UniversityEntity from '../university/university.entity';

import { IRoleEntity } from './types';

@Entity('role')
export default class RoleEntity implements IRoleEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ManyToOne(_ => UniversityEntity, university => university.roles)
    public university!: UniversityEntity;
}