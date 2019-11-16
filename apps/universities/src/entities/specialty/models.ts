import { Model, Table, Column, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import { DepartmentModel } from '../department/models';

@Table
export class SpecialtyModel extends Model<SpecialtyModel> {
    @PrimaryKey
    @Column
    id!: string;

    @Column
    name!: string;

    @ForeignKey(() => DepartmentModel)
    @Column
    departmentId!: string;
}

@Table
export class SpecialtyDescriptionModel extends Model<SpecialtyDescriptionModel> {
    @ForeignKey(() => SpecialtyModel)
    @Column
    specialtyId!: string;

    @Column
    value: string;
}
