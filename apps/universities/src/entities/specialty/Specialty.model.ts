import { Model, Table, Column, ForeignKey, PrimaryKey, DataType } from 'sequelize-typescript';
import DepartmentModel from '../department/Department.model';

@Table
export default class SpecialtyModel extends Model<SpecialtyModel> {
    @PrimaryKey
    @Column({
        type: DataType.STRING,
    })
    public id!: string;

    @Column({
        type: DataType.STRING,
    })
    public name!: string;

    @ForeignKey(() => DepartmentModel)
    @Column({
        type: DataType.STRING,
    })
    public departmentId!: string;
}
