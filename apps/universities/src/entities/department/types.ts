import { IFacultyModel } from '@entities/faculty';

export interface IDepartmentModel {
    id: number;
    name: string;
    facultyId: number;
    faculty: IFacultyModel;
}

export interface IDepartmentDescriptionModel {
    departmentId: number;
    department: IDepartmentModel;
    value: string;
}