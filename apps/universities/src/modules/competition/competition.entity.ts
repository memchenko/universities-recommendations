import {
    Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import SpecialtyEntity from '../specialty/specialty.entity';
import ThresholdScoreEntity from '../threshold-score/threshold-score.entity';

import { ICompetitionEntity } from './types';

@Entity('competition')
export default class CompetitionEntity implements ICompetitionEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id!: number;

    @ApiProperty()
    @Column({
        type: 'int4',
        nullable: false,
        default: '0',
    })
    public enrollee!: number;

    @ApiProperty()
    @Column({
        type: 'int4',
        nullable: false,
        default: '0',
    })
    public slots!: number;

    @ApiProperty()
    @Column({
        type: 'date',
    })
    public startDate!: Date;

    @ApiProperty()
    @Column({
        type: 'date',
    })
    public endDate!: Date;

    @ManyToOne(_ => SpecialtyEntity, specialty => specialty.competitions, {
        cascade: ['remove'],
        nullable: false,
    })
    public specialty!: SpecialtyEntity;

    @ApiProperty()
    @OneToMany(_ => ThresholdScoreEntity, threshold => threshold.competition)
    public thresholds!: ThresholdScoreEntity[];
}
