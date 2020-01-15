import UniversityModel from './university.entity';

export const UNIVERSITY_REPOSITORY = 'UNIVERSITY_REPOSITORY';

export default [
    {
        provide: UNIVERSITY_REPOSITORY,
        useValue: UniversityModel,
    }
]