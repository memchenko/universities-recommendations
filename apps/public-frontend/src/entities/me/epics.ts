import { concat } from 'rxjs';
import { map } from 'rxjs/operators';
import { ofType, ActionsObservable } from 'redux-observable';

import {
    updateSettings,
    deleteContact,
    updateName,
    updateAvatar,
    verifyContact,
    setSettings,
    setContact,
    resetPassword,
    setName,
    setAvatar,
} from './actions';
import {
    settingsLens,
    deleteContactLens,
    verifyContactLens,
    updateNameLens,
    updateAvatarLens,
    resetPasswordLens,
} from './constants';
import {
    patch,
    del,
    get,
    post,
    setToken,
    makeResponseObservable,
} from '../network';
import { Paths } from '../../constants/urls';
import { IContact } from '../users';

const updateSettingsEpic = (
    // TODO: type
    action$: ActionsObservable<any>,
) => concat(
    action$.pipe(
        ofType(updateSettings),
        map(({ payload }) => patch({
            key: settingsLens,
            path: Paths.Settings,
            data: payload,
        })),
    ),
    makeResponseObservable({
        key: settingsLens,
        action: setSettings,
        actionsObservable: action$
    }),
);

const deleteContactEpic = (
    // TODO: type
    action$: ActionsObservable<any>,
) => concat(
    action$.pipe(
        ofType(deleteContact),
        map(({ payload }) => del({
            key: deleteContactLens,
            path: Paths.Contacts,
            pathParams: {
                id: payload,
            },
        })),
    ),
    makeResponseObservable<
        number,
        typeof action$,
        ReturnType<typeof setContact>['payload']
    >({
        key: deleteContactLens,
        action: setContact,
        actionsObservable: action$,
        dataMapper: (data: number) => ({
            id: data as IContact['id'],
            operation: 'remove',
        })
    }),
);

const verifyContactEpic = (
    // TODO: type
    action$: ActionsObservable<any>,
) => concat(
    action$.pipe(
        ofType(verifyContact),
        map(({ payload }) => get({
            key: verifyContactLens,
            path: Paths.Contacts,
            pathParams: {
                id: payload,
            },
        })),
    ),
    makeResponseObservable({
        key: verifyContactLens,
        action: setContact,
        actionsObservable: action$,
        dataMapper: (data: IContact) => ({
            ...data,
            operation: 'update',
        })
    }),
);

const updateNameEpic = (
    // TODO: type
    action$: ActionsObservable<any>,
) => concat(
    action$.pipe(
        ofType(updateName),
        map(({ payload }) => patch({
            key: updateNameLens,
            path: Paths.Name,
            data: payload,
        })),
    ),
    makeResponseObservable({
        key: updateNameLens,
        action: setName,
        actionsObservable: action$,
    }),
);

const updateAvatarEpic = (
    // TODO: type
    action$: ActionsObservable<any>,
) => concat(
    action$.pipe(
        ofType(updateAvatar),
        map(({ payload }) => patch({
            key: updateAvatarLens,
            path: Paths.Avatar,
            data: payload,
        })),
    ),
    makeResponseObservable({
        key: updateAvatarLens,
        action: setAvatar,
        actionsObservable: action$,
    }),
);

const resetPasswordEpic = (
    // TODO: type
    action$: ActionsObservable<any>,
) => concat(
    action$.pipe(
        ofType(resetPassword),
        map(({ payload }) => post({
            key: resetPasswordLens,
            path: Paths.Password,
            data: payload,
        })),
    ),
    makeResponseObservable({
        key: resetPasswordLens,
        action: setToken,
        actionsObservable: action$,
    }),
);

export default [
    updateSettingsEpic,
    deleteContactEpic,
    verifyContactEpic,
    updateNameEpic,
    updateAvatarEpic,
    resetPasswordEpic,
];
