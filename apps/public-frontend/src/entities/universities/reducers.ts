import { createReducer } from 'deox';

import { IUniversitiesState } from './types';
import {
    setUniversities,
    setUniversityDetails,
} from './actions';

const initialState: IUniversitiesState = {};

export default createReducer(initialState, handle => ([
    handle(
        setUniversities,
        (state, action) => {
            const newState = { ...state };

            action.payload.forEach((university) => {
                newState[university.id] = university;
            });

            return newState;
        }
    ),
    handle(
        setUniversityDetails,
        (state, action) => {
            const newState = { ...state };
            const { id, ...details } = action.payload;

            newState[id].details = details;

            return newState;
        }
    ),
]));
