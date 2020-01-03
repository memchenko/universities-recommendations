import 'reflect-metadata';

import { Container } from 'typedi';
import { FastifyInstance } from 'fastify';

import { Environment } from '@services/Environment';
import { SERVER, ENV } from '@constants/dependencies';
import { EnvVariables } from '@constants/types/environment';

import setupApiRoutes from './__init__/api';
import setupDependencies from './__init__/dependencies';

Promise.all([
    setupDependencies,
    setupApiRoutes
])
    .then(() => {
        const server = Container.get<FastifyInstance>(SERVER);
        const env = Container.get<Environment<EnvVariables>>(ENV);

        if (!server || !env) {
            throw new Error('Could\'t run server');
        }

        server.listen(env.get('APP_CONFIG').port, (err, address) => {
            if (err) {
                server.log.error(err);
                process.exit(1);
            }
            server.log.info(`server listening on ${address}`);
        });
    });
