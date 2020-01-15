import { Module } from '@nestjs/common';

import { Service as EnvironmentService } from './environment';

@Module({
    providers: [
        EnvironmentService,
    ],
    exports: [
        EnvironmentService,
    ],
})
export default class UtilsModule {}
