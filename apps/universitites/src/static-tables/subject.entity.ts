import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { ITypeEntity } from './types';

@Entity('subject')
export default class SubjectEntity implements ITypeEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar'
    })
    public title!: string;
}