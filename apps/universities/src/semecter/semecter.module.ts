import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import SemecterEntity from './semecter.entity';
import SemecterService from './semecter.service';
import SemecterController from './semecter.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([SemecterEntity]),
    ],
    exports: [
        SemecterService,
    ],
    providers: [
        SemecterService,
    ],
    controllers: [
        SemecterController,
    ],
})
export default class SemecterModule {}