import {IStateWithUsers } from './types';

export function getUsers(state: IStateWithUsers) {
    return state.users;
}

export function getUserById(state: IStateWithUsers, userId: number) {
    return getUsers(state)[userId];
}
