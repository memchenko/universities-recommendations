import APP_CONFIG from '@configs/app.conf.json';

import { IEnvironment, AppMode, AppConfig } from './Environment.types';

export default class Environment implements IEnvironment {
    constructor() {
        const env: string = process.env.NODE_ENV || AppMode.Prod;
        const config: AppConfig | undefined = APP_CONFIG[env];

        if (!config) {
            throw new Error('No config was provided');
        }

        this.env = env as AppMode;
        this.config = config;
    }

    public readonly config: AppConfig;
    public readonly env: AppMode;

    public get port() {
        return this.config.port;
    }
}