import { Module } from '@nestjs/common';

import providers from './specialty-description.providers';

@Module({
    providers,
    exports: providers,
})
export default class SpecialtyDescriptionModule {}