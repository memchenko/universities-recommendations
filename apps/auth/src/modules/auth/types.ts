import { FastifyRequest } from 'fastify';

import { IUserEntity } from '../user/types';
import { IPrivilegeEntity } from '../role/types';

export type FastifyRequestWithJWTUser = FastifyRequest & {
    user: Pick<
      IUserEntity, 'id' | 'username' | 'password' | 'verified'
    > & { roles: string[], privileges: Omit<IPrivilegeEntity, 'id'>[] },
};

export type LoginData = Pick<
    IUserEntity, 'id' | 'username' | 'verified' | 'roles'
>;

export type FastifyRequestWithLoginData = FastifyRequest & { user: LoginData };
