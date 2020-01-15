import { Module } from '@nestjs/common';

import DescriptionModule from './description/specialty-description.module';
import providers from './specialty.providers';

@Module({
    providers,
    imports: [DescriptionModule],
    exports: [
        ...providers,
        DescriptionModule,
    ],
})
export default class SpecialtyModule {}