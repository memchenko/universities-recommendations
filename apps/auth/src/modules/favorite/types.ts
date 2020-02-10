import { IDictionaryItemEntity } from '../dictionary/types';
import { Dictionary } from '../../constants/entities';

export interface IFavoriteEntity {
    id: number;
    title: string;
    favoriteType: IDictionaryItemEntity<Dictionary.FavoriteType>;
}
