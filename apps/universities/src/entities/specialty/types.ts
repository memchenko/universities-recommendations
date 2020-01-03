import { IDepartmentModel } from '@entities/department';

export interface ISpecialtyModel {
    id: number;
    name: string;
    departmentId: number;
    department: IDepartmentModel;
}

export interface ISpecialtyDescriptionModel {
    specialtyId: number;
    specialty: ISpecialtyModel;
    value: string;
}