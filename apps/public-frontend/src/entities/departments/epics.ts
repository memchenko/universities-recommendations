import { ofType, ActionsObservable } from 'redux-observable';
import { concat } from 'rxjs';
import { map } from 'rxjs/operators';

import {} from './types';
import {
    fetchDepartmentDetails,
    setDepartmentDetails,
} from './actions';
import { detailsLens } from './constants';
import {
    makeResponseObservable,
    get,
} from '../network';
import { Paths } from '../../constants/urls';

const fetchDepartmentDetailsEpic = (
    // TODO: type
    action$: ActionsObservable<any>,
) => concat(
    action$.pipe(
        ofType(fetchDepartmentDetails),
        map(({ payload }) => get({
            key: detailsLens,
            path: Paths.DepartmentDetails.replace(':id', payload) as Paths,
        })),
    ),
    makeResponseObservable({
        key: detailsLens,
        action: setDepartmentDetails,
        actionsObservable: action$,
    })
);

export default [
    fetchDepartmentDetailsEpic,
];