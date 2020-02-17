import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import FavoriteEntity from './favorite.entity';

@Injectable()
export default class FavoriteService extends TypeOrmCrudService<
  FavoriteEntity
> {
  constructor(
    @InjectRepository(FavoriteEntity)
    readonly repository: Repository<FavoriteEntity>,
  ) {
    super(repository);
  }
}
