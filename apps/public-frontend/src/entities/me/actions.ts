import { createActionCreator } from 'deox';

import { IContact } from '../users';
import { ISettings, IMe, Actions, ISetContactArgs, IResetPasswordActionArgs } from './types';

export const setMe = createActionCreator(
    Actions.SetMe,
    resolve => (user: IMe) => resolve(user)
);

export const setSettings = createActionCreator(
    Actions.SetSettings,
    resolve => (settings: ISettings) => resolve(settings)
);

export const updateSettings = createActionCreator(
    Actions.UpdateSettings,
    resolve => (settings: Partial<ISettings>) => resolve(settings)
);

export const setContact = createActionCreator(
    Actions.SetContact,
    resolve => (data: ISetContactArgs) => resolve(data)
);

export const addContact = createActionCreator(
    Actions.AddContact,
    resolve => (contact: IContact) => resolve(contact)
);

export const deleteContact = createActionCreator(
    Actions.DeleteContact,
    resolve => (contactId: IContact['id']) => resolve(contactId)
);

export const verifyContact = createActionCreator(
    Actions.VerifyContact,
    resolve => (contactId: IContact['id']) => resolve(contactId)
);

export const updateName = createActionCreator(
    Actions.UpdateName,
    resolve =>
        (name: Pick<IMe, 'firstName' | 'lastName' | 'middleName'>) =>
            resolve(name)
);

export const setName = createActionCreator(
    Actions.SetName,
    resolve => (data: Pick<IMe, 'firstName' | 'lastName' | 'middleName'>) => resolve(data)
);

export const updateAvatar = createActionCreator(
    Actions.UpdateAvatar,
    resolve => (data: Pick<IMe, 'avatar'>) => resolve(data)
);

export const setAvatar = createActionCreator(
    Actions.SetAvatar,
    resolve => (avatar: IMe['avatar']) => resolve(avatar)
);

export const resetPassword = createActionCreator(
    Actions.ResetPassword,
    resolve => (data: IResetPasswordActionArgs) => resolve(data)
);
