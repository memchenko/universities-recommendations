import { createActionCreator } from 'deox';

import {
    Actions,
    ISetFavoritesPayload,
    IFavorite,
    IAddFavoritePayload,
} from './types';

export const fetchFavorites = createActionCreator(Actions.FetchFavorites);

export const setFavorites = createActionCreator(
    Actions.SetFavorites,
    resolve => (data: ISetFavoritesPayload) => resolve(data)
);

export const addFavorite = createActionCreator(
    Actions.AddFavorite,
    resolve => (data: IAddFavoritePayload) => resolve(data)
);

export const setFavorite = createActionCreator(
    Actions.AddFavorite,
    resolve => (data: IFavorite) => resolve(data)
);
