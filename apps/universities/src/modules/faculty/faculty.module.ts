import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import FacultyEntity from './faculty.entity';
import FacultyService from './faculty.service';
import FacultyController from './faculty.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([FacultyEntity]),
    ],
    exports: [
        FacultyService,
    ],
    providers: [
        FacultyService,
    ],
    controllers: [
        FacultyController,
    ],
})
export default class FacultyModule {}