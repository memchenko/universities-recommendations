import { Module } from '@nestjs/common';

import providers from './department-description.providers';

@Module({
    providers,
    exports: providers,
})
export default class DepartmentDescriptionModule {}