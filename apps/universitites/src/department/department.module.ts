import { Module } from '@nestjs/common';

import DescriptionModule from './description/department-description.module';
import providers from './department.providers';

@Module({
    providers,
    imports: [DescriptionModule],
    exports: [
        ...providers,
        DescriptionModule,
    ],
})
export default class DepartmentModule {}