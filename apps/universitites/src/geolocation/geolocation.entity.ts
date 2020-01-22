import { PrimaryGeneratedColumn, Column, Entity, ManyToMany, JoinTable } from 'typeorm';

import FacultyEntity from '../faculty/faculty.entity';

import { IGeolocationEntity } from './types';

@Entity('geolocation')
export default class GeolocationEntity implements IGeolocationEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'float',
    })
    public longitude!: number;

    @Column({
        type: 'float',
    })
    public latitude!: number;

    @ManyToMany(_ => FacultyEntity)
    @JoinTable()
    public faculties!: FacultyEntity[];
}
