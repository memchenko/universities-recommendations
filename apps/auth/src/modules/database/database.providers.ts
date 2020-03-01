import { createConnection } from 'typeorm';

export const DATABASE = 'DATABASE';

export default [
  {
    provide: DATABASE,
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'auth',
        password: 'password',
        database: 'auth',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        logging: ['query'],
      }),
  },
];
