import { ofType, ActionsObservable } from 'redux-observable';
import { concat } from 'rxjs';
import { map } from 'rxjs/operators';

import {
    fetchUniversityDetails,
    setUniversityDetails,
} from './actions';
import {
    detailsLens,
} from './constants';
import {
    makeResponseObservable,
    get,
} from '../network';
import { Paths } from '../../constants/urls';

const fetchUniversityDetailsEpic = (
    // TODO: type
    action$: ActionsObservable<any>,
) => concat(
    action$.pipe(
        ofType(fetchUniversityDetails),
        map(({ payload }) => get({
            key: detailsLens,
            path: Paths.UniversityDetails.replace(':id', payload) as Paths,
        })),
    ),
    makeResponseObservable({
        key: detailsLens,
        action: setUniversityDetails,
        actionsObservable: action$,
    }),
);

export default [
    fetchUniversityDetailsEpic,
];