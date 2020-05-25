import { ofType, ActionsObservable } from 'redux-observable';
import { concat } from 'rxjs';
import { map } from 'rxjs/operators';

import { Paths } from '../../constants/urls';
import { get, makeResponseObservable } from '../network';
import { fetchUsers, setUsers } from './actions';
import { usersRawDataLens } from './constants';

const fetchUsersEpic = (
    // TODO: type
    action$: ActionsObservable<any>,
) => concat(
    action$.pipe(
        ofType(fetchUsers),
        map(({ payload }) => get({
            key: usersRawDataLens,
            path: Paths.Users,
            data: payload,
        })),
    ),
    makeResponseObservable({
        key: usersRawDataLens,
        action: setUsers,
        actionsObservable: action$,
    })
);

export default [
    fetchUsersEpic,
];