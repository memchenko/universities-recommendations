import { Model, Table, Column, ForeignKey, DataType } from 'sequelize-typescript';
import UniversityModel from './University.model';

@Table
export default class UniversityDescriptionModel extends Model<UniversityDescriptionModel> {
    @ForeignKey(() => UniversityModel)
    @Column({
        type: DataType.STRING,
    })
    public universityId!: string;

    @Column({
        type: DataType.STRING,
    })
    public value!: string;
};