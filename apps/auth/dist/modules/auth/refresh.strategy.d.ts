import { Strategy } from 'passport-jwt';
import { IUserEntity } from '../user/types';
import UserService from '../user/user.service';
declare const RefreshStrategy_base: new (...args: any[]) => Strategy;
export default class RefreshStrategy extends RefreshStrategy_base {
    private readonly usersService;
    constructor(usersService: UserService);
    validate({ username, }: {
        username: string;
    }): Promise<Omit<IUserEntity, 'password'>>;
}
export {};
