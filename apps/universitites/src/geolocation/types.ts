import FacultyEntity from '../faculty/faculty.entity';

export interface IGeolocationEntity {
    id: number;
    longitude: number;
    latitude: number;
    faculties: FacultyEntity[];
}