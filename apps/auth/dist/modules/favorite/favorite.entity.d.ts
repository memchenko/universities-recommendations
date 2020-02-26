import FavoriteTypeEntity from './favorite-type/favorite-type.entity';
import { IFavoriteEntity } from './types';
export default class FavoriteEntity implements IFavoriteEntity {
    id: number;
    value: string;
    favoriteType: FavoriteTypeEntity;
}
