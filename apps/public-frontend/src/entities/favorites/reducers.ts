import { createReducer } from 'deox';

import { setFavorites, setFavorite } from './actions';
import { IFavoritesState } from './types';

const initialState: IFavoritesState = {};

export default createReducer(initialState, handle => ([
    handle(
        setFavorite,
        (state, action) => {
            const { payload: { entityAlias }, payload } = action;
            const entityFavorites = state[entityAlias];

            return {
                ...state,
                [entityAlias]: entityFavorites
                    ? entityFavorites
                        .filter(({ entityId }) => entityId === payload.entityId)
                        .concat(payload)
                    : [payload],
            };
        } 
    ),
    handle(
        setFavorites,
        (state, action) => {
            if (!action.payload.length) {
                return state;
            }

            const newState = { ...state };

            action.payload.forEach((favorite) => {
                newState[favorite.entityAlias] = newState[favorite.entityAlias]
                    ? newState[favorite.entityAlias]
                        .filter(({ entityId }) => entityId === favorite.entityId)
                        .concat(favorite)
                    : [favorite];
            });

            return newState;
        }
    ),
]));