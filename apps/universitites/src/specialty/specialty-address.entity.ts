import { Entity, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { ISpecialtyAddressEntity } from './types';
import SpecialtyEntity from './specialty.entity';
import AddressEntity from '~/address/address.entity';

@Entity('specialty_address')
export default class SpecialtyAddressEntity implements ISpecialtyAddressEntity {
    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ManyToOne(_ => SpecialtyEntity, specialty => specialty.addresses)
    public specialty!: SpecialtyEntity;

    @OneToOne(_ => AddressEntity)
    @JoinColumn()
    public address!: AddressEntity;
}