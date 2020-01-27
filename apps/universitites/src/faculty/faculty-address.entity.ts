import { Entity, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';

import { IFacultyAddressEntity } from './types';
import FacultyEntity from './faculty.entity';

import AddressEntity from '../address/address.entity';

@Entity('faculty_address')
export default class FacultyAddressEntity implements IFacultyAddressEntity {
    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ManyToOne(_ => FacultyEntity, faculty => faculty.addresses)
    public faculty!: FacultyEntity;

    @OneToOne(_ => AddressEntity)
    @JoinColumn()
    public address!: AddressEntity;
}