import { Module } from '@nestjs/common';

import providers from './department.providers';

@Module({
    providers,
    exports: [
        ...providers,
    ],
})
export default class DepartmentModule {}