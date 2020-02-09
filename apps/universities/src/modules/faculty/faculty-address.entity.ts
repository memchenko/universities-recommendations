import {
    Entity,
    Column,
    ManyToOne,
    OneToOne,
    JoinColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { IFacultyAddressEntity } from './types';
import FacultyEntity from './faculty.entity';

import AddressEntity from '../address/address.entity';

@Entity('faculty_address')
export default class FacultyAddressEntity implements IFacultyAddressEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id!: number;

    @ApiProperty()
    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ApiProperty()
    @ManyToOne(_ => FacultyEntity, faculty => faculty.addresses)
    public faculty!: FacultyEntity;

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