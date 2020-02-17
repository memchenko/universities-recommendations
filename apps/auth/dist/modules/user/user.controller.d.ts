import UserService from './user.service';
export default class UserController {
    readonly service: UserService;
    constructor(service: UserService);
}
