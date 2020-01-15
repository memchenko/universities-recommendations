import { IFacultyModel } from '../faculty/types';

export interface IDepartmentModel {
    id: number;
    name: string;
    facultyId: number;
    faculty: IFacultyModel;
}
