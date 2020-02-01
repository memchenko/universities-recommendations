import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { IDescriptionEntity } from './types';

@Entity('description')
export default class DescriptionEntity implements IDescriptionEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
    })
    public value!: string;
}