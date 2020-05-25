import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import SpecialtyEntity from '../specialty/specialty.entity';

import { ISemesterEntity } from './types';

@Entity('semester')
export default class SemesterEntity implements ISemesterEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id!: number;

    @ApiProperty()
    @Column({
        type: 'int',
        nullable: false,
    })
    public yearNumber!: number;

    @ApiProperty()
    @Column({
        type: 'date',
        nullable: false,
    })
    public startDate!: Date;

    @ApiProperty()
    @Column({
        type: 'date',
        nullable: false,
    })
    public endDate!: Date;

    @ApiProperty()
    @OneToOne(_ => SpecialtyEntity, {
        cascade: ['remove'],
        nullable: false,
    })
    @JoinColumn({
        name: 'specialty_id',
    })
    public specialty!: SpecialtyEntity;
}
