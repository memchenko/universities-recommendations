import { createReducer } from 'deox';

import { setUsers } from './actions';
import { IUsersState } from './types';

const initialState: IUsersState = {};

export default createReducer(initialState, handle => ([
    handle(
        setUsers,
        (state, action) => {
            const newState = { ...state };

            action.payload.forEach((user) => {
                newState[user.id] = user;
            });
            
            return newState;
        }
    ),
]));
