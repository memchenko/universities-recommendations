import { Entity, ManyToOne, OneToOne, JoinColumn, Column } from 'typeorm';

import CompetitionEntity from '../competition/competition.entity';
import SubjectEntity from '../static-tables/subject.entity';

import { IThresholdScoreEntity } from './types';

@Entity('threshold_score')
export default class ThresholdScoreEntity implements IThresholdScoreEntity {
    @ManyToOne(_ => CompetitionEntity, competition => competition.thresholds)
    public competition!: CompetitionEntity;

    @OneToOne(_ => SubjectEntity)
    @JoinColumn()
    public subject!: SubjectEntity;

    @Column({
        type: 'int4',
        nullable: false,
        default: '0',
    })
    public value!: number;
}