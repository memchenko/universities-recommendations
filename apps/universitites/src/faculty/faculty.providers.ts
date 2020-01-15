import FacultyEntity from './faculty.entity';

export const FACULTY_REPOSITORY = 'FACULTY_REPOSITORY';

export default [
    {
        provide: FACULTY_REPOSITORY,
        useValue: FacultyEntity,
    }
]