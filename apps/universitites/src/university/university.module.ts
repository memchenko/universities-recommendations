import { Module } from '@nestjs/common';

import DatabaseModule from '../database/database.module';
import providers from './university.providers';
import UniversityController from './university.controller';

@Module({
    providers,
    imports: [DatabaseModule],
    controllers: [UniversityController],
    exports: [
        ...providers,
    ],
})
export default class UniversityModule {}