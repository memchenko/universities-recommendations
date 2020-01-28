import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import ThresholdEntity from './threshold.entity';
import ThresholdService from './threshold.service';
import ThresholdController from './threshold.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([ThresholdEntity]),
    ],
    exports: [
        ThresholdService,
    ],
    providers: [
        ThresholdService,
    ],
    controllers: [
        ThresholdController,
    ],
})
export default class ThresholdModule {}