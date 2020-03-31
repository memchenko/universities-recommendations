import { FastifyRequest } from 'fastify';

import { IUserEntity } from '../user/types';

export interface JWTUser extends Pick<IUserEntity, 'id' | 'username' | 'verified'> {
  exp: number;
  iat: number;
}

export type FastifyRequestWithJWTUser = FastifyRequest & {
    user: JWTUser;
};

export type LoginData = Pick<IUserEntity, 'id' | 'username' | 'verified'>;

export type FastifyRequestWithLoginData = FastifyRequest & {
  user: LoginData;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};
