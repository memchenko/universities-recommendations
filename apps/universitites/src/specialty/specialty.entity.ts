import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';

import DepartmentEntity from '../department/department.entity';
import CompetitionEntity from '../competition/competition.entity';
import DescriptionEntity from '../description/description.entity';
import TeachingTypeEntity from '../static-tables/teaching-type.entity';
import PaymentTypeEntity from '../static-tables/payment-type.entity';

import { ISpecialtyEntity } from './types';

@Entity('specialty')
export default class SpecialtyEntity implements ISpecialtyEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
    })
    public title!: string;

    @Column({
        type: 'int4',
    })
    public price!: number;

    @Column({
        type: 'int4',
    })
    public duration!: number;

    @ManyToOne(_ => DepartmentEntity, department => department.specialties, {
        cascade: ['remove', 'update'],
    })
    public department!: DepartmentEntity;

    @OneToMany(_ => CompetitionEntity, competition => competition.specialty)
    public competitions!: CompetitionEntity[];

    @OneToOne(_ => DescriptionEntity)
    @JoinColumn()
    public description!: DescriptionEntity;

    @OneToOne(_ => TeachingTypeEntity)
    @JoinColumn()
    public teachingType!: TeachingTypeEntity;

    @OneToOne(_ => PaymentTypeEntity)
    @JoinColumn()
    public paymentType!: PaymentTypeEntity;
}
