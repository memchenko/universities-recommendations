import { createReducer } from 'deox';

import { ISearchState } from './types';
import { setSearchResults, setRecommendations } from './actions';

const initialState: ISearchState = {
    total: 0,
    limit: 0,
    offset: 0,
    value: [],
};

export default createReducer(initialState, handle => ([
    handle(
        setSearchResults,
        (_, action) => action.payload
    ),
    handle(
        setRecommendations,
        (_, action) => action.payload
    )
]));