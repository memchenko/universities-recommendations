import CompetitionModel from './competition.entity';

export const COMPETITION_REPOSITORY = 'COMPETITION_REPOSITORY';

export default [
    {
        provide: COMPETITION_REPOSITORY,
        useValue: CompetitionModel,
    }
];