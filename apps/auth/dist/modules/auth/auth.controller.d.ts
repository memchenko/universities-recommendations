import { FastifyRequest } from 'fastify';
import { IUserEntity } from '../user/types';
import AuthService, { Tokens } from './auth.service';
declare type FastifyRequestWithUser = FastifyRequest & {
    user: IUserEntity;
};
export default class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: FastifyRequestWithUser): Tokens;
    getProfile(req: FastifyRequestWithUser): Omit<IUserEntity, 'password'>;
    signin(body: Omit<IUserEntity, 'verified'>): Promise<Tokens>;
    getTokens(req: FastifyRequestWithUser): Tokens;
}
export {};
