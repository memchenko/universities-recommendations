import { Model, Table, Column, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';

import SpecialtyModel from '../specialty.entity';

import { ISpecialtyDescriptionModel } from './types';

@Table
export default class SpecialtyDescriptionModel extends Model<ISpecialtyDescriptionModel> {
    @ForeignKey(() => SpecialtyModel)
    @Column({
        type: DataType.NUMBER,
    })
    public specialtyId!: number;

    @BelongsTo(() => SpecialtyModel)
    public specialty!: SpecialtyModel;

    @Column({
        type: DataType.STRING,
    })
    public value!: string;
}