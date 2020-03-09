import { FastifyRequest } from 'fastify';

import { IUserEntity } from '../user/types';

export type FastifyRequestWithJWTUser = FastifyRequest & {
    user: Pick<IUserEntity, 'id' | 'username' | 'password' | 'verified'>,
};

export type LoginData = Pick<IUserEntity, 'id' | 'username' | 'verified'>;

export type FastifyRequestWithLoginData = FastifyRequest & { user: LoginData };

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};
