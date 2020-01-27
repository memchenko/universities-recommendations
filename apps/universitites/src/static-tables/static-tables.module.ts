import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import DatabaseModule from '../database/database.module';

import TeachingTypeEntity from './teaching-type.entity';
import PaymentTypeEntity from './payment-type.entity';
import providers from './static-tables.providers';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([
            TeachingTypeEntity,
            PaymentTypeEntity
        ]),
    ],
    exports: providers,
})
export default class StaticTablesModule {}