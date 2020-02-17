import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import FavoriteEntity from './favorite.entity';
import FavoriteService from './favorite.service';
import FavoriteController from './favorite.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteEntity])],
  exports: [FavoriteService],
  providers: [FavoriteService],
  controllers: [FavoriteController],
})
export default class FavoriteModule {}
