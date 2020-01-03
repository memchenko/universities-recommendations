import { Model, Table, Column, ForeignKey, PrimaryKey, DataType, BelongsTo } from 'sequelize-typescript';

import { DepartmentModel } from '@entities/department';

import { ISpecialtyModel } from '.';

@Table
export default class SpecialtyModel extends Model<ISpecialtyModel> {
    @PrimaryKey
    @Column({
        type: DataType.NUMBER,
    })
    public id!: number;

    @Column({
        type: DataType.STRING,
    })
    public name!: string;

    @ForeignKey(() => DepartmentModel)
    @Column({
        type: DataType.NUMBER,
    })
    public departmentId!: number;

    @BelongsTo(() => DepartmentModel)
    public department!: DepartmentModel;
}
