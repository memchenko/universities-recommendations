import { RouteOptions, HTTPMethod, FastifyInstance } from 'fastify';
import { Container } from 'typedi';

import { Methods } from '../../constants/types/api-methods';

function decorate(method: HTTPMethod) {
    return (
        url: string,
    ) => (
        target: any,
        handlerKey: string,
    ) => {
        const appInstance: FastifyInstance | undefined = Container.get('app');
        const options: RouteOptions = {
            method,
            url,
            handler: target[handlerKey],
        };

        if (appInstance) {
            appInstance.route(options);
        }

        return target[handlerKey];
    };
}

export const Head = decorate(Methods.HEAD);

export const Get = decorate(Methods.GET);

export const Post = decorate(Methods.POST);

export const Put = decorate(Methods.PUT);

export const Patch = decorate(Methods.PATCH);

export const Delete = decorate(Methods.DELETE)