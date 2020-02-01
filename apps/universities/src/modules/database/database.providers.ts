import { createConnection } from 'typeorm';

export const DATABASE = 'DATABASE';

export default [
    {
        provide: DATABASE,
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'universities',
            password: 'password',
            database: 'universities',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
        }),
    }
]