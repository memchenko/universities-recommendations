import { IUniversityModel } from '@entities/university';

export interface IFacultyModel {
    id: number;
    name: string;
    universityId: number;
    university: IUniversityModel;
}

export interface IFacultyDescriptionModel {
    facultyId: number;
    faculty: IFacultyModel;
    value: string;
}