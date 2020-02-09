import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import CourseEntity from '../course/course.entity';

import { ICourseLectorEntity } from './types';

@Entity('course_lector')
export default class CourseLectorEntity implements ICourseLectorEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id!: number;

    @ApiProperty()
    @Column({
        type: 'int',
        nullable: false,
    })
    public userId!: number;

    @ApiProperty()
    @OneToMany(_ => CourseEntity, course => course.lector)
    public courses!: CourseEntity[];
}
