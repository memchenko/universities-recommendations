export const enum AppMode {
    Dev = 'dev',
    Prod = 'prod'
};

export type AppConfig = {
    mode: AppMode;
    port: number;
};

export type EnvVariables = {
    APP_CONFIG: AppConfig;
};