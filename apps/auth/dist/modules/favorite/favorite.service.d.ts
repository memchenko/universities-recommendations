import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import FavoriteEntity from './favorite.entity';
export default class FavoriteService extends TypeOrmCrudService<FavoriteEntity> {
    readonly repository: Repository<FavoriteEntity>;
    constructor(repository: Repository<FavoriteEntity>);
}
