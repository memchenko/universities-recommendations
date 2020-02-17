import DictionaryItemEntity from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';
import { IFavoriteEntity } from './types';
export default class FavoriteEntity implements IFavoriteEntity {
    id: number;
    title: string;
    favoriteType: DictionaryItemEntity<Dictionary.FavoriteType>;
}
