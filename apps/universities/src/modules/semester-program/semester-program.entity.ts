import { Entity, ManyToMany, ManyToOne, JoinTable } from 'typeorm';

import SemesterEntity from '../semester/semester.entity';
import CourseEntity from '../course/course.entity';

import { ISemesterProgramEntity } from './types';

@Entity('semester_program')
export default class SemesterProgramEntity implements ISemesterProgramEntity {
    @ManyToOne(_ => SemesterEntity, {
        cascade: ['remove'],
        nullable: false,
    })
    public semester!: SemesterEntity;

    @ManyToMany(_ => CourseEntity, {
        cascade: ['update'],
        nullable: false,
    })
    @JoinTable({
        name: 'semester_program_course',
    })
    public courses!: CourseEntity[];
}
