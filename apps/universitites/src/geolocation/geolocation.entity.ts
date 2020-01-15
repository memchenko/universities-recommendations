import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';

import FacultyModel from '../faculty/faculty.entity';

import { IGeolocationModel } from './types';

@Table
export default class GeolocationModel extends Model<IGeolocationModel> {
    @Column({
        type: DataType.FLOAT,
    })
    public longitude!: number;

    @Column({
        type: DataType.FLOAT,
    })
    public latitude!: number;

    @ForeignKey(() => FacultyModel)
    @Column({
        type: DataType.INTEGER,
    })
    public facultyId!: number;

    @BelongsTo(() => FacultyModel)
    public faculties!: FacultyModel[];
}
