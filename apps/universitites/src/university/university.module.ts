import { Module } from '@nestjs/common';

import DescriptionModule from './description/university-description.module';
import providers from './university.providers';
import UniversityController from './university.controller';

@Module({
    providers,
    imports: [DescriptionModule],
    controllers: [UniversityController],
    exports: [
        ...providers,
        DescriptionModule,
    ],
})
export default class UniversityModule {}