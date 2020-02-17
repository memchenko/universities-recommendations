import { Strategy } from 'passport-local';
import AuthService from './auth.service';
import UserService from '../user/user.service';
import UserEntity from '../user/user.entity';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export default class LocalStrategy extends LocalStrategy_base {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UserService, authService: AuthService);
    validate(username: string, password: string): Promise<Omit<UserEntity, 'password'>>;
}
export {};
