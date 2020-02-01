import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import DepartmentEntity from './department.entity';
import DepartmentService from './department.service';
import DepartmentController from './department.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([DepartmentEntity]),
    ],
    exports: [
        DepartmentService,
    ],
    providers: [
        DepartmentService,
    ],
    controllers: [
        DepartmentController,
    ],
})
export default class DepartmentModule {}