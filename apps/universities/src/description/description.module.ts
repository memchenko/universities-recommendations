import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import DescriptionEntity from './description.entity';
import providers from './description.providers';
import DatabaseModule from '../database/database.module';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([DescriptionEntity]),
    ],
    exports: providers,
})
export default class DescriptionModule {}