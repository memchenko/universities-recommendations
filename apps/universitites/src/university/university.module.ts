import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UniversityEntity from './university.entity';
import UniversityService from './university.service';
import UniversityController from './university.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([UniversityEntity]),
    ],
    exports: [
        UniversityService,
    ],
    providers: [
        UniversityService,
    ],
    controllers: [
        UniversityController,
    ],
})
export default class UniversityModule {}