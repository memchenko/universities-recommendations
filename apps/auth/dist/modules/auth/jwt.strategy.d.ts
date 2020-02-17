import { Strategy } from 'passport-jwt';
import { IUserEntity } from '../user/types';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export default class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate({ username, verified }: IUserEntity): {
        username: string;
        verified: boolean;
    };
}
export {};
