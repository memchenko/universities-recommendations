import { Module } from '@nestjs/common';

import providers from './university-description.providers';

@Module({
    providers,
    exports: providers,
})
export default class UniversityDescriptionModule {}