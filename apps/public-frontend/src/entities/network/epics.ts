import { of, merge, from } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import { Paths } from '../../constants/urls';
import { buildUrl } from './utils';
import {
    get,
    post,
    patch,
    put,
    del,
    setRequest,
    getToken,
    setToken,
} from './actions';
import { getAccessToken, getRefreshToken } from './selectors';
import {
    RequestStatus,
    IStateWithNetwork,
    Actions,
    ITokenResponse,
} from './types';

const getEpic = (
    action$: ActionsObservable<ReturnType<typeof get>>,
    state$: StateObservable<IStateWithNetwork>,
) => action$.pipe(
    ofType(Actions.Get),
    mergeMap(({ payload: { key, data, path, pathParams } }: ReturnType<typeof get>) => merge(
        of(setRequest({ key, status: RequestStatus.Pending })),
        from(
            fetch(buildUrl(path || Paths.Locations, pathParams, data), {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${getAccessToken(state$.value)}`,
                },
            })
        ).pipe(
            mergeMap(res => from(res.json())),
            map(data => setRequest({ key, status: RequestStatus.Success, data })),
            catchError(err => of(
                setRequest({ key, status: RequestStatus.Fail, data: err }),
            ))
        )
    )),
);

const postEpic = (
    action$: ActionsObservable<ReturnType<typeof post>>,
) => action$.pipe(
    ofType(Actions.Post),
    mergeMap(({ payload: { key, data, path, pathParams } }: ReturnType<typeof post>) => merge(
        of(setRequest({ key, status: RequestStatus.Pending })),
        from(
            fetch(buildUrl(path, pathParams), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
        ).pipe(
            mergeMap(res => from(res.json())),
            map(data => setRequest({ key, status: RequestStatus.Success, data })),
            catchError(err => of(
                setRequest({ key, status: RequestStatus.Fail, data: err }),
            ))
        )
    )),
);

const patchEpic = (
    action$: ActionsObservable<ReturnType<typeof patch>>,
    state$: StateObservable<IStateWithNetwork>,
) => action$.pipe(
    ofType(Actions.Patch),
    mergeMap(({ payload: { key, data, path, pathParams } }: ReturnType<typeof patch>) => merge(
        of(setRequest({ key, status: RequestStatus.Pending })),
        from(
            fetch(buildUrl(path || Paths.Locations, pathParams, data), {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${getAccessToken(state$.value)}`,
                },
            })
        ).pipe(
            mergeMap(res => from(res.json())),
            map(data => setRequest({ key, status: RequestStatus.Success, data })),
            catchError(err => of(
                setRequest({ key, status: RequestStatus.Fail, data: err }),
            )),
        )
    )),
);

const putEpic = (
    action$: ActionsObservable<ReturnType<typeof put>>,
    state$: StateObservable<IStateWithNetwork>,
) => action$.pipe(
    ofType(Actions.Put),
    mergeMap(({ payload: { key, data, path, pathParams } }: ReturnType<typeof put>) => merge(
        of(setRequest({ key, status: RequestStatus.Pending })),
        from(
            fetch(buildUrl(path || Paths.Locations, pathParams), {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${getAccessToken(state$.value)}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
        ).pipe(
            mergeMap(res => from(res.json())),
            map(data => setRequest({ key, status: RequestStatus.Success, data })),
            catchError(err => of(
                setRequest({ key, status: RequestStatus.Fail, data: err })
            )),
        )
    )),
);

const deleteEpic = (
    action$: ActionsObservable<ReturnType<typeof del>>,
    state$: StateObservable<IStateWithNetwork>,
) => action$.pipe(
    ofType(Actions.Delete),
    mergeMap(({ payload: { key, path, pathParams } }: ReturnType<typeof del>) => merge(
        of(setRequest({ key, status: RequestStatus.Pending })),
        from(
            fetch(buildUrl(path || Paths.Locations, pathParams), {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${getAccessToken(state$.value)}`,
                },
            })
        ).pipe(
            mergeMap(res => from(res.json())),
            map(data => setRequest({ key, status: RequestStatus.Success, data })),
            catchError(err => of(
                setRequest({ key, status: RequestStatus.Fail, data: err }),
            )),
        )
    )),
);

const getTokenEpic = (
    action$: ActionsObservable<ReturnType<typeof getToken>>,
    state$: StateObservable<IStateWithNetwork>
) => action$.pipe(
    ofType(Actions.GetToken),
    mergeMap(() => from(
        fetch(Paths.Token, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${getRefreshToken(state$.value)}`,
            },
        })
    )),
    mergeMap(res => from(res.json())),
    mergeMap((data: ITokenResponse) => of(
        setToken({ type: 'access', value: data.accessToken }),
        setToken({ type: 'refresh', value: data.refreshToken }),
    )),
);

export default [
    getEpic,
    postEpic,
    patchEpic,
    putEpic,
    deleteEpic,
    getTokenEpic,
];
