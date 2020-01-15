import UniversityDescriptionModel from './university-description.entity';

export const UNIVERSITY_DESCRIPTION_REPOSITORY =
    'UNIVERSITY_DESCRIPTION_REPOSITORY';

export default [
    {
        provide: UNIVERSITY_DESCRIPTION_REPOSITORY,
        useValue: UniversityDescriptionModel,
    }
]