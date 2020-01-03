import { Model, Table, Column, PrimaryKey, Unique, DataType } from 'sequelize-typescript';

import { IUniversityModel } from '.';

@Table
export default class UniversityModel extends Model<IUniversityModel> {
    @PrimaryKey
    @Column({
        type: DataType.NUMBER,
    })
    public id!: number;
    
    @Unique
    @Column({
        type: DataType.STRING,
    })
    public name!: string;
}
