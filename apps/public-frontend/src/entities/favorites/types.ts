export enum Actions {
    FetchFavorites = '@favorites/FETCH_FAVORITES',
    SetFavorites = '@favorites/SET_FAVORITES',
    AddFavorite = '@favorites/ADD_FAVORITE',
    SetFavorite = '@favorites/SET_FAVORITE',
}

export interface IFavorite {
    entityType: number;
    entityId: number;
    entityAlias: string;
}

export type ISetFavoritesPayload = IFavorite[];

export type IAddFavoritePayload = Pick<
    IFavorite,
    'entityId' | 'entityType'
>;

export interface IFavoritesState {
    [entityAlias: string]: IFavorite[];
}

export interface IStateWithFavorite {
    favorites: IFavoritesState;
}
