import { Entity, Column, OneToMany } from 'typeorm';

import CourseEntity from '../course/course.entity';

import { ICourseLectorEntity } from './types';

@Entity('course_lector')
export default class CourseLectorEntity implements ICourseLectorEntity {
    @Column({
        type: 'int',
        nullable: false,
    })
    public userId!: number;

    @OneToMany(_ => CourseEntity, course => course.lector)
    public courses!: CourseEntity[];
}
