import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { IType } from './types';

@Entity('teaching_type')
export default class TeachingTypeEntity implements IType {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        unique: true,
    })
    public title!: string;
}
