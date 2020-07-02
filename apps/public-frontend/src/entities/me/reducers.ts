import { createReducer } from 'deox';

import {
    setMe,
    setSettings,
    setContact,
    setName,
    setAvatar,
} from './actions';
import {
    IMe
} from './types';
import { IContact, UserTypes } from '../users';

const initialState: IMe = {
    id: -1,
    userType: UserTypes.Enrollee,
    avatar: '',
    firstName: '',
    lastName: '',
    middleName: '',
    settings: {
        isEmailVisible: false,
        isPhoneVisible: false,
    },
    contacts: [],
};

export default createReducer(initialState, handle => ([
    handle(
        setMe,
        (_, action) => action.payload
    ),
    handle(
        setSettings,
        (state, action) => ({
            ...state,
            settings: action.payload,
        })
    ),
    handle(
        setContact,
        (state, action) => {
            const { operation, ...contact } = action.payload;
            const newState = {
                ...state,
                contacts: state.contacts
                    .filter(({ id }) => id === action.payload.id)
            };
            
            if (operation === 'remove') {
                return newState;
            }

            newState.contacts = newState.contacts.concat(contact as IContact);

            return newState;
        }
    ),
    handle(
        setName,
        (state, action) => ({
            ...state,
            ...action.payload,
        })
    ),
    handle(
        setAvatar,
        (state, action) => ({
            ...state,
            avatar: action.payload,
        })
    ),
]));