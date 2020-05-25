import { IUser, IContact } from '../users';
import { IBodyData } from '../network';

export enum Actions {
    SetMe = '@me/SET_ME',
    SetSettings = '@me/SET_SETTINGS',
    UpdateSettings = '@me/UPDATE_SETTINGS',
    SetContact = '@me/SET_CONTACT',
    AddContact = '@me/ADD_CONTACT',
    DeleteContact = '@me/DELETE_CONTACT',
    VerifyContact = '@me/VERIFY_CONTACT',
    UpdateName = '@me/UPDATE_NAME',
    SetName = '@me/SET_NAME',
    UpdateAvatar = '@me/UPDATE_AVATAR',
    SetAvatar = '@me/SET_AVATAR',
    ResetPassword = '@me/RESET_PASSWORD',
}

export interface ISettings {
    isEmailVisible: boolean;
    isPhoneVisible: boolean;
}

export interface ISetContactArgs extends Partial<IContact> {
    id: number;
    operation: 'add' | 'remove' | 'update';
}

export interface IResetPasswordActionArgs extends IBodyData {
    currentPassword: string;
    newPassword: string;
} 

export interface IMe extends IUser {
    settings: ISettings;
}

export interface IStateWithMe {
    me: IMe;
}