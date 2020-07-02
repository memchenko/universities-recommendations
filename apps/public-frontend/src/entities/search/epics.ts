import { concat } from 'rxjs';
import { map } from 'rxjs/operators';
import { ofType, ActionsObservable } from 'redux-observable';

import {
    fetchSearch,
    setSearchResults,
    fetchRecommendations,
    setRecommendations,
    fetchLocations,
} from './actions';
import {
    searchLens,
    recommendationsLens,
} from './constants';
import {
    get,
    post,
    makeResponseObservable,
} from '../network';
import { Paths } from '../../constants/urls';

const fetchSearchEpic = (
    // TODO: type
    action$: ActionsObservable<any>,
) => concat(
    action$.pipe(
        ofType(fetchSearch),
        map(({ payload }) => get({
            key: searchLens,
            path: Paths.Search,
            data: payload,
        })),
    ),
    makeResponseObservable({
        key: searchLens,
        action: setSearchResults,
        actionsObservable: action$,
    }),
);

const fetchRecommendationsEpic = (
    // TODO: type
    action$: ActionsObservable<any>,
) => concat(
    action$.pipe(
        ofType(fetchRecommendations),
        map(({ payload }) => get({
            key: recommendationsLens,
            path: Paths.Recommendations,
            data: payload,
        })),
    ),
    makeResponseObservable({
        key: recommendationsLens,
        action: setRecommendations,
        actionsObservable: action$,
    }),
);

const fetchLocationsEpic = (
    // TODO: type
    action$: ActionsObservable<any>
) => action$.pipe(
    ofType(fetchLocations),
    map(({ payload }) => post({
        key: payload.key,
        url: Paths.Locations,
        data: { query: payload.query, count: 10 },
        headers: {
            Accept: 'application/json',
            'Authorization': 'Token 3d212224f45a40cca74d1fccc4601dbf03dc6fdf',
        },
    })),
);

export default [
    fetchSearchEpic,
    fetchRecommendationsEpic,
    fetchLocationsEpic,
];
