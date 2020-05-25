import { createReducer } from 'deox';

import { IFacultiesState } from './types';
import { setFaculties, setFacultyDetails } from './actions';

const initialState: IFacultiesState = {};

export default createReducer(initialState, handle => ([
    handle(
        setFaculties,
        (state, action) => {
            const newState = { ...state };

            action.payload.forEach((faculty) => {
                newState[faculty.id] = faculty;
            });

            return newState;
        }
    ),
    handle(
        setFacultyDetails,
        (state, action) => {
            const newState = { ...state };
            const { id, ...faculty } = action.payload;

            newState[id].details = faculty;

            return newState;
        }
    ),
]));
