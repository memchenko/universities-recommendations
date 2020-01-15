import { IFacultyModel } from '../types';

export interface IFacultyDescriptionModel {
    facultyId: number;
    faculty: IFacultyModel;
    value: string;
}