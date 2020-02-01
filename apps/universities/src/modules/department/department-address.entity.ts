import { Entity, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { IDepartmentAddressEntity } from './types';
import DepartmentEntity from './department.entity';
import AddressEntity from '~/address/address.entity';

@Entity('department_address')
export default class DepartmentAddressEntity implements IDepartmentAddressEntity {
    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ManyToOne(_ => DepartmentEntity, department => department.addresses)
    public department!: DepartmentEntity;

    @OneToOne(_ => AddressEntity)
    @JoinColumn()
    public address!: AddressEntity;
}