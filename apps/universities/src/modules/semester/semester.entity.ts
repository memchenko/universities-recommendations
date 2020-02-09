import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    ManyToMany,
    JoinTable
} from 'typeorm';

import SpecialtyEntity from '../specialty/specialty.entity';
import CourseEntity from '../course/course.entity';

import { ISemesterEntity } from './types';

@Entity('semester')
export default class SemesterEntity implements ISemesterEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'int',
        nullable: false,
    })
    public yearNumber!: number;

    @Column({
        type: 'date',
        nullable: false,
    })
    public startDate!: Date;

    @Column({
        type: 'date',
        nullable: false,
    })
    public endDate!: Date;

    @OneToOne(_ => SpecialtyEntity, {
        cascade: ['remove'],
        nullable: false,
    })
    @JoinColumn({
        name: 'specialty_id',
    })
    public specialty!: SpecialtyEntity;

    @ManyToMany(_ => CourseEntity, {
        cascade: ['update'],
        nullable: false,
    })
    @JoinTable({
        name: 'semester_course',
    })
    public courses!: CourseEntity[];
}
