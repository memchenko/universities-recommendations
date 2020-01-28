import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import ThresholdScoreEntity from './threshold-score.entity';
import ThresholdScoreService from './threshold-score.service';
import ThresholdScoreController from './threshold-score.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([ThresholdScoreEntity]),
    ],
    exports: [
        ThresholdScoreService,
    ],
    providers: [
        ThresholdScoreService,
    ],
    controllers: [
        ThresholdScoreController,
    ],
})
export default class ThresholdModule {}