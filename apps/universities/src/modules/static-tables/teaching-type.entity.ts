import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { ITypeEntity } from './types';

@Entity('teaching_type')
export default class TeachingTypeEntity implements ITypeEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        unique: true,
    })
    public title!: string;
}
