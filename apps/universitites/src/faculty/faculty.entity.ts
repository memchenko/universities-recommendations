import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';

import UniversityEntity from '../university/university.entity';
import DepartmentEntity from '../department/department.entity';
import DescriptionEntity from '../description/description.entity';

import { IFacultyEntity } from './types';

@Entity('faculty')
export default class FacultyEntity implements IFacultyEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ManyToOne(_ => UniversityEntity, university => university.faculties, {
        cascade: ['remove', 'update'],
    })
    public university!: UniversityEntity;

    @OneToMany(_ => DepartmentEntity, department => department.faculty)
    public departments!: DepartmentEntity[];

    @OneToOne(_ => DescriptionEntity)
    @JoinColumn()
    public description!: DescriptionEntity;
}
