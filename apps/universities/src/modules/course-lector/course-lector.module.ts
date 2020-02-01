import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import CourseLectorEntity from './course-lector.entity';
import CourseLectorService from './course-lector.service';
import CourseLectorController from './course-lector.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([CourseLectorEntity]),
    ],
    exports: [
        CourseLectorService,
    ],
    providers: [
        CourseLectorService,
    ],
    controllers: [
        CourseLectorController,
    ],
})
export default class CourseLectorModule {}