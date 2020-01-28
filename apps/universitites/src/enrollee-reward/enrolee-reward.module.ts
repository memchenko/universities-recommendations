import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import EnrolleeRewardEntity from './enrollee-reward.entity';
import EnrolleeRewardService from './enrollee-reward.service';
import EnroleeRewardController from './enrolee-reward.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([EnrolleeRewardEntity]),
    ],
    exports: [
        EnrolleeRewardService,
    ],
    providers: [
        EnrolleeRewardService,
    ],
    controllers: [
        EnroleeRewardController,
    ],
})
export default class EnroleeRewardModule {}