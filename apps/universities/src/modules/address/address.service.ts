import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import AddressEntity from './address.entity';

@Injectable()
export default class AddressService extends TypeOrmCrudService<AddressEntity> {
    constructor(
        @InjectRepository(AddressEntity)
        readonly repository: Repository<AddressEntity>,
    ) {
        super(repository);
    }
}