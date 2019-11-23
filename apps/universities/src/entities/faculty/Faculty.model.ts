import { Model, Table, Column, ForeignKey, PrimaryKey, DataType } from 'sequelize-typescript';
import UniversityModel from '../university/University.model';

@Table
export default class FacultyModel extends Model<FacultyModel> {
    @PrimaryKey
    @Column({
        type: DataType.STRING,
    })
    public id!: string;

    @Column({
        type: DataType.STRING,
    })
    public name!: string;

    @ForeignKey(() => UniversityModel)
    @Column({
        type: DataType.STRING,
    })
    public universityId!: string;
}
