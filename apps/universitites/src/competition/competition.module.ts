import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import CompetitionService from './competition.service';
import CompetitionController from './competition.controller';
import CompetitionEntity from './competition.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([CompetitionEntity]),
    ],
    providers: [
        CompetitionService,
    ],
    controllers: [
        CompetitionController,
    ],
    exports: [
        CompetitionService,
    ],
})
export default class CompetitionModule {}