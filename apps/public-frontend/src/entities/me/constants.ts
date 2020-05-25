import { lensProp } from 'ramda';

export const settingsLens = lensProp('me/settings');

export const deleteContactLens = lensProp('me/contacts/delete');

export const verifyContactLens = lensProp('me/contacts/verify');

export const updateNameLens = lensProp('me/name/update');

export const updateAvatarLens = lensProp('me/avatar/update');

export const resetPasswordLens = lensProp('me/reset-password');
