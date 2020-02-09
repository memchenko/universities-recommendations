import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { IAddressEntity } from './types';

@Entity('address')
export default class AddressEntity implements IAddressEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id!: number;
    
    @ApiProperty()
    @Column({
        type: 'varchar',
    })
    public fiasId!: string;

    @ApiProperty()
    @Column({
        type: 'float',
    })
    public longitude!: number;

    @ApiProperty()
    @Column({
        type: 'float',
    })
    public latitude!: number;
}