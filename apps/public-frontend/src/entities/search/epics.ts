import { concat } from 'rxjs';
import { map } from 'rxjs/operators';
import { ofType, ActionsObservable } from 'redux-observable';

import {
    fetchSearch,
    setSearchResults,
    fetchRecommendations,
    setRecommendations,
} from './actions';
import {
    searchLens,
    recommendationsLens,
} from './constants';
import {
    get,
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

export default [
    fetchSearchEpic,
    fetchRecommendationsEpic,
];
