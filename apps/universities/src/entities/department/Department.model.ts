import { Model, Table, Column, PrimaryKey, DataType, ForeignKey } from 'sequelize-typescript';
import FacultyModel from '../faculty/Faculty.model';

@Table
export default class DepartmentModel extends Model<DepartmentModel> {
    @PrimaryKey
    @Column({
        type: DataType.STRING,
    })
    public id!: string;

    @Column({
        type: DataType.STRING,
    })
    public name!: string;

    @ForeignKey(() => FacultyModel)
    @Column({
        type: DataType.STRING,
    })
    public facultyId!: string;
}
