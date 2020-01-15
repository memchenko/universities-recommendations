import FacultyDescriptionModel from './faculty-description.entity';

export const FACULTY_DESCRIPTION_REPOSITORY =
    'FACULTY_DESCRIPTION_REPOSITORY';

export default [
    {
        provide: FACULTY_DESCRIPTION_REPOSITORY,
        useValue: FacultyDescriptionModel,
    }
];