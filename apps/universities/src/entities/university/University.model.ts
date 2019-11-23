import { Model, Table, Column, PrimaryKey, Unique, DataType } from 'sequelize-typescript';

@Table
export default class UniversityModel extends Model<UniversityModel> {
    @PrimaryKey
    @Column({
        type: DataType.STRING,
    })
    public id!: string;
    
    @Unique
    @Column({
        type: DataType.STRING,
    })
    public name!: string;
}
