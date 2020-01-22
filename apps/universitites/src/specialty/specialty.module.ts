import { Module } from '@nestjs/common';

import providers from './specialty.providers';

@Module({
    providers,
    exports: [
        ...providers,
    ],
})
export default class SpecialtyModule {}