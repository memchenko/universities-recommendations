import { Model, Table, Column, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';

import { IUniversityDescriptionModel, UniversityModel } from '.';

@Table
export default class UniversityDescriptionModel extends Model<IUniversityDescriptionModel> {
    @ForeignKey(() => UniversityModel)
    @Column({
        type: DataType.NUMBER,
    })
    public universityId!: number;

    @BelongsTo(() => UniversityModel)
    public university!: UniversityModel;

    @Column({
        type: DataType.STRING,
    })
    public value!: string;
};