import { createReducer } from 'deox';

import { ISpecialtiesState } from './types';
import { setSpecialties, setSpecialtyDetails } from './actions';

const initialState: ISpecialtiesState = {};

export default createReducer(initialState, handle => ([
    handle(
        setSpecialties,
        (state, action) => {
            const newState = { ...state };

            action.payload.forEach((specialty) => {
                newState[specialty.id] = specialty;
            });

            return newState;
        }
    ),
    handle(
        setSpecialtyDetails,
        (state, action) => {
            const newState = { ...state };
            const { id, ...specialty } = action.payload;

            newState[id].details = specialty;

            return newState;
        }
    ),
]));
