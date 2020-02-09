import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { IAddressEntity } from './types';

@Entity('address')
export default class AddressEntity implements IAddressEntity {
    @PrimaryGeneratedColumn()
    public id!: number;
    
    @Column({
        type: 'varchar',
    })
    public fiasId!: string;

    @Column({
        type: 'float',
    })
    public longitude!: number;

    @Column({
        type: 'float',
    })
    public latitude!: number;
}