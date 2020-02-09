import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import FacultyEntity from '../faculty/faculty.entity';
import DescriptionEntity from '../description/description.entity';
import RoleEntity from '../role/role.entity';
import CourseEntity from '../course/course.entity';

import UniversityAddressEntity from './university-address.entity';
import { IUniversityEntity } from './types';

@Entity('university')
export default class UniversityEntity implements IUniversityEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id!: number;
    
    @ApiProperty()
    @Column({ type: 'varchar', nullable: false })
    public title!: string;

    @ApiProperty()
    @OneToMany(_ => FacultyEntity, faculty => faculty.university)
    public faculties!: FacultyEntity[];

    @ApiProperty()
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

    @ApiProperty()
    @OneToMany(_ => RoleEntity, role => role.university)
    public roles!: RoleEntity[];

    @ApiProperty()
    @OneToMany(_ => CourseEntity, course => course.university)
    public courses!: CourseEntity[];
}
