import { createActionCreator } from 'deox';

import {
    Actions,
    IFetchSearchActionPayload,
    IFetchRecommendationsPayload,
    ISearchResult,
    ILocationActionArgData,
} from './types';

export const fetchSearch = createActionCreator(
    Actions.FetchSearch,
    resolve =>
        (data: IFetchSearchActionPayload) => resolve(data)
);

export const fetchRecommendations = createActionCreator(
    Actions.FetchRecommendations,
    resolve =>
        (data: IFetchRecommendationsPayload) => resolve(data)
);

export const setSearchResults = createActionCreator(
    Actions.SetResults,
    resolve => (data: ISearchResult) => resolve(data)
);

export const setRecommendations = createActionCreator(
    Actions.SetRecommendations,
    resolve => (data: ISearchResult) => resolve(data)
);

export const fetchLocations = createActionCreator(
    Actions.FetchLocations,
    resolve => (data: ILocationActionArgData) => resolve(data)
);