import { Connection } from 'typeorm';

import { DATABASE } from '../database/database.providers';

import AddressEntity from './address.entity';

export const ADDRESS_REPOSITORY = 'ADDRESS_REPOSITORY';

export default [
    {
        provide: ADDRESS_REPOSITORY,
        useFactory: (connection: Connection) =>
            connection.getRepository(AddressEntity),
        inject: [DATABASE],
    }
];