import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import GeolocationEntity from './geolocation.entity';
import GeolocationService from './geolocation.service';
import GeolocationController from './geolocation.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([GeolocationEntity]),
    ],
    exports: [
        GeolocationService,
    ],
    providers: [
        GeolocationService,
    ],
    controllers: [
        GeolocationController,
    ],
})
export default class GeolocationModule {}