import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import FacultyEntity from '../faculty/faculty.entity';
import SpecialtyEntity from '../specialty/specialty.entity';
import DescriptionEntity from '../description/description.entity';

import { IDepartmentEntity } from './types';
import DepartmentAddressEntity from './department-address.entity';

@Entity('department')
export default class DepartmentEntity implements IDepartmentEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id!: number;

    @ApiProperty()
    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ApiProperty()
    @ManyToOne(_ => FacultyEntity, faculty => faculty.departments, {
        cascade: ['remove'],
        nullable: false,
    })
    public faculty!: FacultyEntity;

    @ApiProperty()
    @OneToMany(_ => SpecialtyEntity, specialty => specialty.department)
    public specialties!: SpecialtyEntity[];

    @ApiProperty()
    @OneToOne(_ => DescriptionEntity, {
        cascade: ['update'],
    })
    @JoinColumn({
        name: 'description_id',
    })
    public description!: DescriptionEntity;

    @ApiProperty()
    @OneToMany(_ => DepartmentAddressEntity, address => address.department)
    public addresses!: DepartmentAddressEntity[];
}
