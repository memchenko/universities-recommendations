import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import SemesterEntity from './semester.entity';
import SemesterService from './semester.service';
import SemesterController from './semester.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([SemesterEntity]),
    ],
    exports: [
        SemesterService,
    ],
    providers: [
        SemesterService,
    ],
    controllers: [
        SemesterController,
    ],
})
export default class SemesterModule {}