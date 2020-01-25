import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import GeolocationEntity from './geolocation.entity';
import GeolocationService from './geolocation.service';

@Crud({
    model: {
        type: GeolocationEntity,
    }
})
@Controller('geolocation')
export default class GeolocationController {
    constructor(
        public service: GeolocationService,
    ) {}
}