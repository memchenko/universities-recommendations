export interface IEnvironment extends AppConfig {
    env: AppMode;
    config: AppConfig;
}

export type AppConfig = {
    port: number;
};

export const enum AppMode {
    Dev = 'dev',
    Prod = 'prod'
}
