import {
    Model, Table, Column, PrimaryKey, Unique, ForeignKey
} from 'sequelize-typescript';

@Table
export class UniversityModel extends Model<UniversityModel> {
    @PrimaryKey
    @Column
    id!: string;
    
    @Unique
    @Column
    name!: string;
}

@Table
export class UniversityDescriptionModel extends Model<UniversityDescriptionModel> {
    @ForeignKey(() => UniversityModel)
    @Column
    universityId!: string;

    @Column
    value!: string;
};