import { ofType, ActionsObservable } from 'redux-observable';
import { concat } from 'rxjs';
import { map } from 'rxjs/operators';

import {
    get,
    post,
    makeResponseObservable,
} from '../network';
import {
    favoritesLens,
    favoriteLens,
} from './constants';
import {
    fetchFavorites,
    addFavorite,
    setFavorite,
    setFavorites,
} from './actions';
import { Paths } from '../../constants/urls';

const fetchFavoritesEpic = (
    // TODO: type
    action$: ActionsObservable<any>,
) => concat(
    action$.pipe(
        ofType(fetchFavorites),
        map(() => get({
            key: favoritesLens,
            path: Paths.Favorites,
        })),
    ),
    makeResponseObservable({
        key: favoritesLens,
        action: setFavorites,
        actionsObservable: action$,
    }),
);

const addFavoriteEpic = (
    // TODO: type
    action$: ActionsObservable<any>,
) => concat(
    action$.pipe(
        ofType(addFavorite),
        map(({ payload }) => post({
            key: favoriteLens,
            path: Paths.Favorites,
            data: payload,
        })),
    ),
    makeResponseObservable({
        key: favoriteLens,
        action: setFavorite,
        actionsObservable: action$,
    })
);

export default [
    fetchFavoritesEpic,
    addFavoriteEpic,
];