import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { IEnrolleeRewardEntity } from './types';

@Entity('enrollee_reward')
export default class EnrolleeRewardEntity implements IEnrolleeRewardEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id!: number;
    
    @ApiProperty()
    @Column({
        type: 'int',
        nullable: false,
    })
    public userId!: number;

    @ApiProperty()
    @Column({
        type: 'int',
        nullable: false,
    })
    public fileId!: number;

    @ApiProperty()
    @Column({
        type: 'varchar',
        length: 250,
    })
    public title!: string;

    @ApiProperty()
    @Column({
        type: 'varchar',
        length: 1000,
    })
    public description!: string;
}