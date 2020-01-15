import GeolocationEntity from './geolocation.entity';

export const GEOLOCATION_REPOSITORY = 'GEOLOCATION_REPOSITORY';

export default [
    {
        provide: GEOLOCATION_REPOSITORY,
        useValue: GeolocationEntity,
    }
]
