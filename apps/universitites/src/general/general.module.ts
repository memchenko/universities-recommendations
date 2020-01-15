import { Module } from '@nestjs/common';

import Controller from './general.controller';

@Module({
    controllers: [Controller],
})
export default class GeneralModule {}