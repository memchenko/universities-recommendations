import { Model, Table, Column, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';

import UniversityModel from '../university.entity';
import { IUniversityDescriptionModel } from './types';

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