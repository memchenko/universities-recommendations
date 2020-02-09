import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import CourseEntity from '../course/course.entity';

import { ICourseLectorEntity } from './types';

@Entity('course_lector')
export default class CourseLectorEntity implements ICourseLectorEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'int',
        nullable: false,
    })
    public userId!: number;

    @OneToMany(_ => CourseEntity, course => course.lector)
    public courses!: CourseEntity[];
}
