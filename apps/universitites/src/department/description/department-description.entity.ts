import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

import DepartmentModel from '../department.entity';
import { IDepartmentDescriptionModel } from './types';

@Table
export default class DepartmentDescriptionModel extends Model<IDepartmentDescriptionModel> {
    @ForeignKey(() => DepartmentModel)
    @Column({
        type: DataType.NUMBER,
    })
    public departmentId!: number;

    @BelongsTo(() => DepartmentModel)
    public department!: DepartmentModel;

    @Column({
        type: DataType.STRING,
    })
    public value!: string;
}