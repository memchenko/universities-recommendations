import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';

import FacultyEntity from '../faculty/faculty.entity';
import DescriptionEntity from '../description/description.entity';
import RoleEntity from '../role/role.entity';
import CourseEntity from '../course/course.entity';

import UniversityAddressEntity from './university-address.entity';
import { IUniversityEntity } from './types';

@Entity('university')
export default class UniversityEntity implements IUniversityEntity {
    @PrimaryGeneratedColumn()
    public id!: number;
    
    @Column({ type: 'varchar', nullable: false })
    public title!: string;

    @OneToMany(_ => FacultyEntity, faculty => faculty.university)
    public faculties!: FacultyEntity[];

    @OneToOne(_ => DescriptionEntity, {
        cascade: ['update'],
        nullable: false,
    })
    @JoinColumn({
        name: 'description_id',
    })
    public description!: DescriptionEntity;

    @OneToMany(_ => UniversityAddressEntity, address => address.university)
    public addresses!: UniversityAddressEntity[];

    @OneToMany(_ => RoleEntity, role => role.university)
    public roles!: RoleEntity[];

    @OneToMany(_ => CourseEntity, course => course.university)
    public courses!: CourseEntity[];
}
