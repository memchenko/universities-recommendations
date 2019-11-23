import { Model, Table, Column, ForeignKey, DataType } from 'sequelize-typescript';
import FacultyModel from './Faculty.model';

@Table
export default class FacultyDescriptionModel extends Model<FacultyDescriptionModel> {
    @ForeignKey(() => FacultyModel)
    @Column({
        type: DataType.STRING,
    })
    public facultyId!: string;

    @Column({
        type: DataType.STRING,
    })
    public value!: string;
}