import { IDepartmentModel } from '../department/types';

export interface ISpecialtyModel {
    id: number;
    name: string;
    departmentId: number;
    department: IDepartmentModel;
}
