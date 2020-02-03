import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import DatabaseModule from '../database/database.module';

import DescriptionEntity from './description.entity';
import providers from './description.providers';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([DescriptionEntity]),
    ],
    providers,
    exports: providers,
})
export default class DescriptionModule {}