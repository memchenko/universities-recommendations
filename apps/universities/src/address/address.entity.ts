import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

import { IAddress } from './types';
import LocalityTypeEntity from '~/static-tables/locality-type.entity';

@Entity('address')
export default class AddressEntity implements IAddress {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
    })
    public country!: string;

    @Column({
        type: 'varchar',
    })
    public region!: string;

    @OneToOne(_ => LocalityTypeEntity)
    @JoinColumn()
    public localityType!: LocalityTypeEntity;

    @Column({
        type: 'varchar',
    })
    public locality!: string;

    @Column({
        type: 'varchar',
    })
    public street!: string;

    @Column({
        type: 'varchar',
    })
    public building!: string;

    @Column({
        type: 'float',
    })
    public longitude!: number;

    @Column({
        type: 'float',
    })
    public latitude!: number;
}