import FacultyEntity from '../faculty/faculty.entity';

export interface IUniversityEntity {
    id: number;
    title: string;
    faculties: FacultyEntity[];
}
