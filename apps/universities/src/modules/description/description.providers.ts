import { Connection } from 'typeorm';

import { DATABASE } from '../database/database.providers';

import DescriptionEntity from './description.entity';

export const DESCRIPTION_REPOSITORY = 'DESCRIPTION_REPOSITORY';

export default [
    {
        provide: DESCRIPTION_REPOSITORY,
        useFactory: (connection: Connection) =>
            connection.getRepository(DescriptionEntity),
        inject: [DATABASE],
    }
];