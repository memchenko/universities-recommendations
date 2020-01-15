import { Module } from '@nestjs/common';

import providers from './competition.providers';
// import CompetitionController from './competition.controller';

@Module({
    providers,
    // controllers: [CompetitionController],
    exports: providers,
})
export default class CompetitionModule {}