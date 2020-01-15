import { Module } from '@nestjs/common';

import providers from './faculty-description.providers';

@Module({
    providers,
    exports: providers,
})
export default class FacultyDescriptionModule {}