import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import FacultyEntity from '../faculty/faculty.entity';

import { IUniversityEntity } from './types';

@Entity('university')
export default class UniversityEntity implements IUniversityEntity {
    @PrimaryGeneratedColumn()
    public id!: number;
    
    @Column({ type: 'varchar', nullable: false })
    public title!: string;

    @OneToMany(_ => FacultyEntity, faculty => faculty.university)
    public faculties!: FacultyEntity[];
}
