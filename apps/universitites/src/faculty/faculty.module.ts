import { Module } from '@nestjs/common';

import DescriptionModule from './description/faculty-description.module';
import providers from './faculty.providers';

@Module({
    providers,
    imports: [DescriptionModule],
    exports: [
        ...providers,
        DescriptionModule,
    ],
})
export default class FacultyModule {}