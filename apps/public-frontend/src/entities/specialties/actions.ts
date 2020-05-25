import { createActionCreator } from 'deox';

import {
    Actions,
    ISpecialtyData,
    ISetSpecialtyDetailsData,
} from './types';

export const setSpecialties = createActionCreator(
    Actions.SetSpecialties,
    resolve => (data: ISpecialtyData[]) => resolve(data)
);

export const fetchSpecialtyDetails = createActionCreator(
    Actions.FetchSpecialtyDetails,
    resolve => (data: number) => resolve(data)
);

export const setSpecialtyDetails = createActionCreator(
    Actions.SetSpecialtyDetails,
    resolve => (data: ISetSpecialtyDetailsData) => resolve(data)
);