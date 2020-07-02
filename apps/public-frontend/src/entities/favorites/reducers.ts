import { createReducer } from 'deox';
import { assocPath, dissocPath } from 'ramda';

import { setFavorite } from './actions';
import { IFavoritesState } from './types';

const initialState: IFavoritesState = {};

export default createReducer(initialState, handle => ([
    handle(
        setFavorite,
        (state, action) => {
            const { payload: { id, entity, checked } } = action;
            
            return (checked
                ? assocPath([entity, id], true, state)
                : dissocPath([entity, id], state)) as IFavoritesState;
        } 
    ),
]));