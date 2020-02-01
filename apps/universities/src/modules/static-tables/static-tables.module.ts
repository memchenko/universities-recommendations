import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import DatabaseModule from '../database/database.module';

import providers from './static-tables.providers';
import TeachingTypeEntity from './teaching-type.entity';
import PaymentTypeEntity from './payment-type.entity';
import LocalityTypeEntity from './locality-type.entity';
import SubjectEntity from './subject.entity';
import PrivilegeTypeEntity from './privilege-type.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([
            TeachingTypeEntity,
            PaymentTypeEntity,
            LocalityTypeEntity,
            SubjectEntity,
            PrivilegeTypeEntity,
        ]),
    ],
    exports: providers,
})
export default class StaticTablesModule {}