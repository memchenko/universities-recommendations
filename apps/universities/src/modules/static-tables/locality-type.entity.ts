import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { ITypeEntity } from './types';

@Entity('locality_type')
export default class LocalityTypeEntity implements ITypeEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        unique: true,
    })
    public title!: string;
}