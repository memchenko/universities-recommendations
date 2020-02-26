import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import FavoriteTypeEntity from './favorite-type.entity';

@Injectable()
export default class FavoriteTypeService extends TypeOrmCrudService<
    FavoriteTypeEntity
> {
    constructor(
        @InjectRepository(FavoriteTypeEntity)
        readonly repository: Repository<FavoriteTypeEntity>,
    ) {
        super(repository);
    }
}