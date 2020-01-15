import SpecialtyDesctiptionModel from './specialty-description.entity';

export const SPECIALTY_DESCRIPTION_REPOSITORY =
    'SPECIALTY_DESCRIPTION_REPOSITORY';

export default [
    {
        provide: SPECIALTY_DESCRIPTION_REPOSITORY,
        useValue: SpecialtyDesctiptionModel,
    }
]