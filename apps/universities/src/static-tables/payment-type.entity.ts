import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { ITypeEntity } from './types';

@Entity('payment_type')
export default class PaymentTypeEntity implements ITypeEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        unique: true,
    })
    public title!: string;
}