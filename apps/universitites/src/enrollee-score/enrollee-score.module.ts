import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import EnrolleeScoreEntity from './enrollee-score.entity';
import EnrolleeScoreService from './enrollee-score.service';
import EnrolleeScoreController from './enrollee-score.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([EnrolleeScoreEntity]),
    ],
    exports: [
        EnrolleeScoreService,
    ],
    providers: [
        EnrolleeScoreService,
    ],
    controllers: [
        EnrolleeScoreController,
    ],
})
export default class EnrolleeScoreModule {}