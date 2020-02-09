import {
    Entity,
    Column,
    ManyToOne,
    OneToOne,
    JoinColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import AddressEntity from '../address/address.entity';

import { ISpecialtyAddressEntity } from './types';
import SpecialtyEntity from './specialty.entity';

@Entity('specialty_address')
export default class SpecialtyAddressEntity implements ISpecialtyAddressEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id!: number;

    @ApiProperty()
    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ApiProperty()
    @ManyToOne(_ => SpecialtyEntity, specialty => specialty.addresses)
    public specialty!: SpecialtyEntity;

    @ApiProperty()
    @OneToOne(_ => AddressEntity, {
        cascade: ['remove'],
        nullable: false,
    })
    @JoinColumn({
        name: 'address_id',
    })
    public address!: AddressEntity;
}