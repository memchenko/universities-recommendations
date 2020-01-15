import { Entity, Column, OneToMany } from 'typeorm';

import SpecialtyModel from '../specialty/specialty.entity';
import { ICompetitionModel } from './types';

@Entity()
export default class CompetitionModel implements ICompetitionModel {
    @Column({ type: 'int4', nullable: false, default: '0' })
    public enrollee!: number;

    @Column({ type: 'int4', nullable: false, default: '0' })
    public slots!: number;

    @OneToMany(_ => SpecialtyModel, specialty => specialty.competitions, {
        cascade: ['insert', 'remove', 'update'],
    })
    public specialty!: SpecialtyModel;
}
