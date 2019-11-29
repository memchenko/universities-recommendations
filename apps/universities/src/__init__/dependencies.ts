import { Container } from 'typedi';
import * as Fastify from 'fastify';

import { Environment } from '@services/Environment';
import { SERVER, ENV } from '@constants/dependencies';

export default function(): void {
    ([
        [SERVER, Fastify()],
        [ENV, new Environment()]
    ] as [string, any][])
        .forEach(
            ([name, dep]) => Container.set(name, dep)
        );
}