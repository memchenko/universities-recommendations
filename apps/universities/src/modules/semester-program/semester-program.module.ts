import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import SemesterProgramEntity from './semester-program.entity';
import SemesterProgramService from './semester-program.service';
import SemesterProgramController from './semester-program.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([SemesterProgramEntity]),
    ],
    exports: [
        SemesterProgramService,
    ],
    providers: [
        SemesterProgramService,
    ],
    controllers: [
        SemesterProgramController,
    ],
})
export default class SemesterProgramModule {}