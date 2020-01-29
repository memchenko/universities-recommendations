import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { ICourseEntity } from './types';
import DescriptionEntity from '~/description/description.entity';
import UniversityEntity from '~/university/university.entity';

@Entity('course')
export default class CourseEntity implements ICourseEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    public title!: string;

    @OneToOne(_ => DescriptionEntity)
    @JoinColumn()
    public description!: DescriptionEntity;

    @ManyToOne(_ => UniversityEntity, university => university.courses)
    public university!: UniversityEntity;
}