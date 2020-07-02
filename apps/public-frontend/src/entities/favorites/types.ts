import { EntitiesTypes } from '../../constants/entities';

export enum Actions {
    SetFavorite = '@favorites/SET_FAVORITE',
}

export interface ISetFavoriteArgData {
    id: number;
    entity: EntitiesTypes;
    checked: boolean;
}

export interface IFavoritesState {
    [entityAlias: string]: {
        [id: number]: true;
    };
}

export interface IStateWithFavorite {
    favorites: IFavoritesState;
}
