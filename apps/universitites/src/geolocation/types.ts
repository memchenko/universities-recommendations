import { IFacultyModel } from '../faculty/types';

export interface IGeolocationModel {
    longitude: number;
    latitude: number;
    faculties: IFacultyModel[];
}