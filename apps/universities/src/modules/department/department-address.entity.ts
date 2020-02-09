import { Entity, Column, ManyToOne, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

import AddressEntity from '../address/address.entity';

import { IDepartmentAddressEntity } from './types';
import DepartmentEntity from './department.entity';

@Entity('department_address')
export default class DepartmentAddressEntity implements IDepartmentAddressEntity {
    @PrimaryGeneratedColumn()
    public id!: number;
    
    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ManyToOne(_ => DepartmentEntity, department => department.addresses)
    public department!: DepartmentEntity;

    @OneToOne(_ => AddressEntity, {
        cascade: ['remove'],
        nullable: false,
    })
    @JoinColumn({
        name: 'address_id',
    })
    public address!: AddressEntity;
}