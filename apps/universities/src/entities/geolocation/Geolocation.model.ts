import { Table, Model, Column, ForeignKey, DataType, Unique } from 'sequelize-typescript';
import FacultyModel from '../faculty/Faculty.model';

@Table
export default class GeolocationModel extends Model<GeolocationModel> {
    @Unique
    @ForeignKey(() => FacultyModel)
    @Column({
        type: DataType.STRING,
    })
    public facultyId!: string;

    @Column({
        type: DataType.FLOAT,
    })
    public longitude: number;

    @Column({
        type: DataType.FLOAT,
    })
    public latitude: number;
}
