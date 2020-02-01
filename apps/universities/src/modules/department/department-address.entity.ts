import { Entity, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';

import AddressEntity from '../address/address.entity';

import { IDepartmentAddressEntity } from './types';
import DepartmentEntity from './department.entity';

@Entity('department_address')
export default class DepartmentAddressEntity implements IDepartmentAddressEntity {
    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ManyToOne(_ => DepartmentEntity, department => department.addresses)
    public department!: DepartmentEntity;

    @OneToOne(_ => AddressEntity)
    @JoinColumn({
        name: 'addressId',
    })
    public address!: AddressEntity;
}