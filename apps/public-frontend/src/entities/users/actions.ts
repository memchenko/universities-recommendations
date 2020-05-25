import { createActionCreator } from 'deox';

import { Actions, IUserFilters, IUser } from './types';

export const fetchUsers = createActionCreator(
    Actions.FetchUsers,
    resolve => (data: IUserFilters) => resolve(data)
);

export const setUsers = createActionCreator(
    Actions.SetUsers,
    resolve => (users: IUser[]) => resolve(users)
);