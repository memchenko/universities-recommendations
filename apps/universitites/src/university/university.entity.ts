import {
    Model, Table, Column, PrimaryKey, Unique, DataType, AutoIncrement
} from 'sequelize-typescript';

import { IUniversityModel } from './types';

@Table
export default class UniversityModel extends Model<IUniversityModel> {
    @AutoIncrement
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
