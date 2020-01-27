import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UniversityEntity from './university.entity';
import UniversityService from './university.service';
import UniversityController from './university.controller';
import UniversityAddressEntity from './university-address.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UniversityEntity,
            UniversityAddressEntity
        ]),
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