import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

import FacultyEntity from '../faculty/faculty.entity';
import SpecialtyEntity from '../specialty/specialty.entity';

import { IDepartmentEntity } from './types';

@Entity('department')
export default class DepartmentEntity implements IDepartmentEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({ type: 'varchar' })
    public title!: string;

    @ManyToOne(_ => FacultyEntity, faculty => faculty.departments, {
        cascade: ['remove', 'update'],
    })
    public faculty!: FacultyEntity;

    @OneToMany(_ => SpecialtyEntity, specialty => specialty.department)
    public specialties!: SpecialtyEntity[];
}
