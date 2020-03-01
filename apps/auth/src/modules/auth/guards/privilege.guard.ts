import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { FastifyRequest } from 'fastify';

import { IPrivilegeEntity } from '../../role/types';
import { accessTypeToHTTPMethodMap } from '../../../constants/privileges';

type FastifyRequestWithUser = FastifyRequest & {
    user: {
        privileges: Omit<IPrivilegeEntity, 'id'>[],
    },
};

@Injectable()
export default class PrivilegeGuard implements CanActivate {
    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const { req: { url, method }, user } = context
            .switchToHttp()
            .getRequest<FastifyRequestWithUser>();
        const { privileges } = user;
        const object = url.match(/^\/(.+?)\//)[1]; 
        const privilege = privileges.find(privilege => privilege.object === object);

        if (!privilege) {
            return false;
        }

        const isMethodAllowed = accessTypeToHTTPMethodMap[privilege.accessType].includes(method);

        return isMethodAllowed;
    }
}
