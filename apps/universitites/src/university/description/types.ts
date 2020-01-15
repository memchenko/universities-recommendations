import { IUniversityModel } from '../types';

export interface IUniversityDescriptionModel {
    universityId: number;
    university: IUniversityModel;
    value: string;
}