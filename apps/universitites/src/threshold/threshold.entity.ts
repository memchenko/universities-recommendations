import { Entity, ManyToOne, OneToOne, JoinColumn, Column } from 'typeorm';

import CompetitionEntity from '../competition/competition.entity';
import SubjectEntity from '../static-tables/subject.entity';

import { IThresholdEntity } from './types';

@Entity('threshold')
export default class ThresholdEntity implements IThresholdEntity {
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