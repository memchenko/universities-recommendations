import { Model, Table, Column, PrimaryKey, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

import { FacultyModel } from '@entities/faculty';

import { IDepartmentModel } from '.';

@Table
export default class DepartmentModel extends Model<IDepartmentModel> {
    @PrimaryKey
    @Column({
        type: DataType.NUMBER,
    })
    public id!: number;

    @Column({
        type: DataType.STRING,
    })
    public name!: string;

    @ForeignKey(() => FacultyModel)
    @Column({
        type: DataType.NUMBER,
    })
    public facultyId!: number;

    @BelongsTo(() => FacultyModel)
    public faculty!: FacultyModel;
}
