import { Model, Table, Column, PrimaryKey, ForeignKey } from 'sequelize-typescript';
import { FacultyModel } from '../faculty/models';

@Table
export class DepartmentModel extends Model<DepartmentModel> {
    @PrimaryKey
    @Column
    id!: string;

    @Column
    name!: string;

    @ForeignKey(() => FacultyModel)
    @Column
    facultyId!: string;
}

@Table
export class DepartmentDescriptionModel extends Model<DepartmentDescriptionModel> {
    @ForeignKey(() => DepartmentModel)
    @Column
    departmentId!: string;

    @Column
    value!: string;
}
