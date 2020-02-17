import { IUserEntity } from './types';
export default class UserEntity implements IUserEntity {
    username: string;
    password: string;
    verified: boolean;
}
