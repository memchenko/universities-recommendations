import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';

import UniversityEntity from '../university/university.entity';
import DepartmentEntity from '../department/department.entity';
import DescriptionEntity from '../description/description.entity';

import { IFacultyEntity } from './types';
import FacultyAddressEntity from './faculty-address.entity';

@Entity('faculty')
export default class FacultyEntity implements IFacultyEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ManyToOne(_ => UniversityEntity, university => university.faculties, {
        cascade: ['remove'],
        nullable: false,
    })
    public university!: UniversityEntity;

    @OneToMany(_ => DepartmentEntity, department => department.faculty)
    public departments!: DepartmentEntity[];

    @OneToOne(_ => DescriptionEntity, {
        cascade: ['update'],
    })
    @JoinColumn({
        name: 'description',
    })
    public description!: DescriptionEntity;

    @OneToMany(_ => FacultyAddressEntity, address => address.faculty)
    public addresses!: FacultyAddressEntity[];
}
