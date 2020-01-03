import { Model, Table, Column, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';

import { IFacultyDescriptionModel, FacultyModel } from '.';

@Table
export default class FacultyDescriptionModel extends Model<IFacultyDescriptionModel> {
    @ForeignKey(() => FacultyModel)
    @Column({
        type: DataType.NUMBER,
    })
    public facultyId!: number;

    @BelongsTo(() => FacultyModel)
    public faculty!: FacultyModel;

    @Column({
        type: DataType.STRING,
    })
    public value!: string;
}