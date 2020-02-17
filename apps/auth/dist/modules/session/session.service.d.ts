import { ConfigService } from '@nestjs/config';
export default class SessionService {
    private readonly config;
    private readonly client;
    constructor(config: ConfigService);
    get(key: string): Promise<string>;
    set(key: string, value: string, ttl: number): Promise<any>;
}
