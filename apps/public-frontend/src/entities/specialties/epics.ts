import { ofType, ActionsObservable } from 'redux-observable';
import { concat } from 'rxjs';
import { map } from 'rxjs/operators';

import {
    fetchSpecialtyDetails,
    setSpecialtyDetails,
} from './actions';
import { detailsLens } from './constants';
import {
    makeResponseObservable,
    get,
} from '../network';
import { Paths } from '../../constants/urls';

const fetchSpecialtyDetailsEpic = (
    // TODO: type
    action$: ActionsObservable<any>
) => concat(
    action$.pipe(
        ofType(fetchSpecialtyDetails),
        map(({ payload }) => get({
            key: detailsLens,
            path: Paths.SpecialtyDetails.replace(':id', payload) as Paths,
        })),
    ),
    makeResponseObservable({
        key: detailsLens,
        action: setSpecialtyDetails,
        actionsObservable: action$,
    }),
);

export default [
    fetchSpecialtyDetailsEpic,
];