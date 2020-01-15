import { Module } from '@nestjs/common';

import providers from './geolocation.providers';

@Module({
    providers,
    exports: providers,
})
export default class GeolocationModule {}