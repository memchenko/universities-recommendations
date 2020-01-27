import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { IType } from './types';

@Entity('payment_type')
export default class PaymentTypeEntity implements IType {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        unique: true,
    })
    public title!: string;
}