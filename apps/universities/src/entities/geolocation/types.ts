import FacultyModel from '../faculty/Faculty.model';

export interface IGeolocationModel {
    longitude: number;
    latitude: number;
    faculties: FacultyModel[];
}