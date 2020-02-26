import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import FavoriteEntity from './favorite.entity';
import FavoriteService from './favorite.service';
import FavoriteController from './favorite.controller';
import FavoriteTypeEntity from './favorite-type/favorite-type.entity';
import FavoriteTypeService from './favorite-type/favorite-type.service';
import FavoriteTypeController from './favorite-type/favorite-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteEntity, FavoriteTypeEntity])],
  exports: [FavoriteService, FavoriteTypeService],
  providers: [FavoriteService, FavoriteTypeService],
  controllers: [FavoriteController, FavoriteTypeController],
})
export default class FavoriteModule {}
