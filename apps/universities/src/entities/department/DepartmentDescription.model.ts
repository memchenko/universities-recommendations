import { Model, Table, Column, DataType, ForeignKey } from 'sequelize-typescript';
import DepartmentModel from './Department.model';

@Table
export class DepartmentDescriptionModel extends Model<DepartmentDescriptionModel> {
    @ForeignKey(() => DepartmentModel)
    @Column({
        type: DataType.STRING,
    })
    public departmentId!: string;

    @Column({
        type: DataType.STRING,
    })
    public value!: string;
}