import { Container } from 'typedi';
import * as Fastify from 'fastify';

import { Environment } from '@services/Environment';
import { SERVER, ENV } from '@constants/dependencies';
import { EnvVariables } from '@constants/types/environment';

export default function(): void {
    const deps: [string, any][] = [
        [SERVER, Fastify()],
        [ENV, new Environment<EnvVariables>()],
    ];

    deps.forEach(
        ([name, dep]) => Container.set(name, dep)
    );
}