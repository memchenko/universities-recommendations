import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import SpecialtyEntity from './specialty.entity';

@Injectable()
export default class SpecialtyService extends TypeOrmCrudService<SpecialtyEntity> {
    constructor(
        @InjectRepository(SpecialtyEntity)
        readonly repository: Repository<SpecialtyEntity>,
    ) {
        super(repository);
    }
}
