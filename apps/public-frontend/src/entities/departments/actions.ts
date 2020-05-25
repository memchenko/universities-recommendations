import { createActionCreator } from 'deox';

import {
    Actions,
    IDepartmentData,
    ISetDepartmentDetailsData,
} from './types';

export const setDepartments = createActionCreator(
    Actions.SetDepartments,
    resolve => (data: IDepartmentData[]) => resolve(data)
);

export const fetchDepartmentDetails = createActionCreator(
    Actions.FetchDepartmentDetails,
    resolve => (data: number) => resolve(data)
);

export const setDepartmentDetails = createActionCreator(
    Actions.SetDepartmentDetails,
    resolve => (data: ISetDepartmentDetailsData) => resolve(data)
);

