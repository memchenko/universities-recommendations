import { Table, Model, Column, ForeignKey } from 'sequelize-typescript';
import { FacultyModel } from '../faculty/models';

@Table
export class GeolocationModel extends Model<GeolocationModel> {
    @ForeignKey(() => FacultyModel)
    @Column
    facultyId!: string;

    @Column
    longitude: number;

    @Column
    latitude: number;
}
