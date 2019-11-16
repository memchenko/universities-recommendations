import { Model, Table, Column, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import { UniversityModel } from '../university/models';

@Table
export class FacultyModel extends Model<FacultyModel> {
    @PrimaryKey
    @Column
    id!: string;

    @Column
    name!: string;

    @ForeignKey(() => UniversityModel)
    @Column
    universityId!: string;
}

@Table
export class FacultyDescriptionModel extends Model<FacultyDescriptionModel> {
    @ForeignKey(() => FacultyModel)
    @Column
    facultyId!: string;

    @Column
    value!: string;
}
