import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('payment_type')
export default class PaymentTypeEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        unique: true,
    })
    public title!: string;
}