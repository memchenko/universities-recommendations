import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';

import FacultyEntity from '../faculty/faculty.entity';

import { IUniversityEntity } from './types';
import DescriptionEntity from '~/description/description.entity';

@Entity('university')
export default class UniversityEntity implements IUniversityEntity {
    @PrimaryGeneratedColumn()
    public id!: number;
    
    @Column({ type: 'varchar', nullable: false })
    public title!: string;

    @OneToMany(_ => FacultyEntity, faculty => faculty.university)
    public faculties!: FacultyEntity[];

    @OneToOne(_ => DescriptionEntity)
    @JoinColumn()
    public description!: DescriptionEntity;
}
