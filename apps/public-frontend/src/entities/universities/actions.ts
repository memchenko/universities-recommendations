import { createActionCreator } from 'deox';

import {
    Actions,
    IUniversityData,
    ISetUniversityDetailsData,
} from './types';

export const setUniversities = createActionCreator(
    Actions.SetUniversities,
    resolve => (data: IUniversityData[]) => resolve(data)
);

export const fetchUniversityDetails = createActionCreator(
    Actions.FetchUniversityDetails,
    resolve => (data: number) => resolve(data)
);

export const setUniversityDetails = createActionCreator(
    Actions.SetUniversityDetails,
    resolve => (data: ISetUniversityDetailsData) => resolve(data)
);
