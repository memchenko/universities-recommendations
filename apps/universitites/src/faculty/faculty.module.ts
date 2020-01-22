import { Module } from '@nestjs/common';

import providers from './faculty.providers';

@Module({
    providers,
    exports: [
        ...providers,
    ],
})
export default class FacultyModule {}