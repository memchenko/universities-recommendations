import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import GeolocationEntity from './geolocation.entity';

@Injectable()
export default class GeolocationService extends TypeOrmCrudService<GeolocationEntity> {
    constructor(
        @InjectRepository(GeolocationEntity)
        readonly repository: Repository<GeolocationEntity>,
    ) {
        super(repository);
    }
}