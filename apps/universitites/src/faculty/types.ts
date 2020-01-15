import { IUniversityModel } from '../university/types';

export interface IFacultyModel {
    id: number;
    name: string;
    universityId: number;
    university: IUniversityModel;
}
