import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';

import SubjectEntity from '../static-tables/subject.entity';

import { IEnrolleeScoreEntity } from './types';

@Entity('enrollee_score')
export default class EnrolleeScoreEntity implements IEnrolleeScoreEntity {
    @Column({
        type: 'int',
        nullable: false,
    })
    public userId!: number;

    @OneToOne(_ => SubjectEntity)
    @JoinColumn()
    public subject!: SubjectEntity;

    @Column({
        type: 'int',
        nullable: false,
        default: '0',
    })
    public value!: number;
}
