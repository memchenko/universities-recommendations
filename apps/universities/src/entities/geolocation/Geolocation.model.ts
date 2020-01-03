import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';

import { FacultyModel } from '@entities/faculty';

import { IGeolocationModel } from '.';

@Table
export default class GeolocationModel extends Model<IGeolocationModel> {
    @Column({
        type: DataType.FLOAT,
    })
    public longitude: number;

    @Column({
        type: DataType.FLOAT,
    })
    public latitude: number;

    @HasMany(() => FacultyModel)
    public faculties: FacultyModel[];
}
