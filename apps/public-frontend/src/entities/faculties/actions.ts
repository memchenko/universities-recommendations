import { createActionCreator } from 'deox';

import {
    Actions,
    IFacultyData,
    ISetFacultyDetailsData,
} from './types';

export const setFaculties = createActionCreator(
    Actions.SetFaculties,
    resolve => (data: IFacultyData[]) => resolve(data)
);

export const fetchFacultyDetails = createActionCreator(
    Actions.FetchFacultyDetails,
    resolve => (data: number) => resolve(data)
);

export const setFacultyDetails = createActionCreator(
    Actions.SetFacultyDetails,
    resolve => (data: ISetFacultyDetailsData) => resolve(data)
);
