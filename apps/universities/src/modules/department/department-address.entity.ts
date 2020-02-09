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

import { IDepartmentAddressEntity } from './types';
import DepartmentEntity from './department.entity';

@Entity('department_address')
export default class DepartmentAddressEntity implements IDepartmentAddressEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id!: number;
    
    @ApiProperty()
    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ApiProperty()
    @ManyToOne(_ => DepartmentEntity, department => department.addresses)
    public department!: DepartmentEntity;

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