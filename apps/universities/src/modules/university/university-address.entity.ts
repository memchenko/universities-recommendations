import { Entity, Column, ManyToOne, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

import AddressEntity from '../address/address.entity';

import { IUniversityAddressEntity } from './types';
import UniversityEntity from './university.entity';

@Entity('university_address')
export default class UniversityAddressEntity implements IUniversityAddressEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ManyToOne(_ => UniversityEntity, university => university.addresses)
    public university!: UniversityEntity;

    @OneToOne(_ => AddressEntity, {
        cascade: ['remove'],
        nullable: false,
    })
    @JoinColumn({
        name: 'address_id',
    })
    public address!: AddressEntity;
}