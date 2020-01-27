import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { IType } from './types';

@Entity('locality_type')
export default class LocalityTypeEntity implements IType {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        unique: true,
    })
    public title!: string;
}