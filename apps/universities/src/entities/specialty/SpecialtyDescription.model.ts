import { Model, Table, Column, ForeignKey, DataType } from 'sequelize-typescript';
import SpecialtyModel from './Specialty.model';

@Table
export default class SpecialtyDescriptionModel extends Model<SpecialtyDescriptionModel> {
    @ForeignKey(() => SpecialtyModel)
    @Column({
        type: DataType.STRING,
    })
    public specialtyId!: string;

    @Column({
        type: DataType.STRING,
    })
    public value: string;
}