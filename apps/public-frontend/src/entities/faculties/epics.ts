import { ofType, ActionsObservable } from 'redux-observable';
import { concat } from 'rxjs';
import { map } from 'rxjs/operators';

import {} from './types';
import {
    fetchFacultyDetails,
    setFacultyDetails,
} from './actions';
import { detailsLens } from './constants';
import {
    makeResponseObservable,
    get,
} from '../network';
import { Paths } from '../../constants/urls';

const fetchFacultyDetailsEpic = (
    // TODO: type
    action$: ActionsObservable<any>,
) => concat(
    action$.pipe(
        ofType(fetchFacultyDetails),
        map(({ payload }) => get({
            key: detailsLens,
            path: Paths.FacultyDetails.replace(':id', payload) as Paths,
        })),
    ),
    makeResponseObservable({
        key: detailsLens,
        action: setFacultyDetails,
        actionsObservable: action$,
    }),
);

export default [
    fetchFacultyDetailsEpic,
];