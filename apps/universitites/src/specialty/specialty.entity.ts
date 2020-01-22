import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

import DepartmentEntity from '../department/department.entity';
import CompetitionEntity from '../competition/competition.entity';

import { ISpecialtyEntity } from './types';

@Entity('specialty')
export default class SpecialtyEntity implements ISpecialtyEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ManyToOne(_ => DepartmentEntity, department => department.specialties, {
        cascade: ['remove', 'update'],
    })
    public department!: DepartmentEntity;

    @OneToMany(_ => CompetitionEntity, competition => competition.specialty)
    public competitions!: CompetitionEntity[];
}
