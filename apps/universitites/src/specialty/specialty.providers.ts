import SpecialtyEntity from './specialty.entity';

export const SPECIALTY_REPOSITORY = 'SPECIALTY_REPOSITORY';

export default [
    {
        provide: SPECIALTY_REPOSITORY,
        useValue: SpecialtyEntity,
    }
]