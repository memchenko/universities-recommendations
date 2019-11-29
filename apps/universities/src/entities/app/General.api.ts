import { ServerResponse } from 'http';

import { FastifyRequest, FastifyReply } from 'fastify';

import { Head } from '../../utils/decorators/route';

export default class General {
    @Head('/')
    public isServerAlive(_: FastifyRequest, reply: FastifyReply<ServerResponse>) {
        reply.code(200).send();
    }
}