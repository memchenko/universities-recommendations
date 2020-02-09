import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import SpecialtyEntity from './specialty.entity';
import SpecialtyService from './specialty.service';
import SpecialtyController from './specialty.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([SpecialtyEntity]),
    ],
    exports: [
        SpecialtyService,
    ],
    providers: [
        SpecialtyService,
    ],
    controllers: [
        SpecialtyController,
    ],
})
export default class SpecialtyModule {}