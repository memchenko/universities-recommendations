import { createReducer } from 'deox';

import { IDepartmentsState } from './types';
import { setDepartments, setDepartmentDetails } from './actions';

const initialState: IDepartmentsState = {};

export default createReducer(initialState, handle => ([
    handle(
        setDepartments,
        (state, action) => {
            const newState = { ...state };

            action.payload.forEach((department) => {
                newState[department.id] = department;
            });

            return newState;
        }
    ),
    handle(
        setDepartmentDetails,
        (state, action) => {
            const newState = { ...state };
            const { id, ...department } = action.payload;

            newState[id].details = department;

            return newState;
        }
    )
]));
