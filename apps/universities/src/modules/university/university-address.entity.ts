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

import { IUniversityAddressEntity } from './types';
import UniversityEntity from './university.entity';

@Entity('university_address')
export default class UniversityAddressEntity implements IUniversityAddressEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id!: number;

    @ApiProperty()
    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ManyToOne(_ => UniversityEntity, university => university.addresses)
    public university!: UniversityEntity;

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