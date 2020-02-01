import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

import SpecialtyEntity from '../specialty/specialty.entity';

import { ISemesterEntity } from './types';

@Entity('semecter')
export default class SemesterEntity implements ISemesterEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'int',
        nullable: false,
    })
    public yearNumber!: number;

    @Column({
        type: 'date',
        nullable: false,
    })
    public startDate!: Date;

    @Column({
        type: 'date',
        nullable: false,
    })
    public endDate!: Date;

    @OneToOne(_ => SpecialtyEntity, {
        cascade: ['remove'],
        nullable: false,
    })
    @JoinColumn({
        name: 'specialty',
    })
    public specialty!: SpecialtyEntity;
}
