import { Connection } from 'typeorm';

import DescriptionEntity from './description.entity';
import { DATABASE } from '../database/database.providers';

export const DESCRIPTION_REPOSITORY = 'DESCRIPTION_REPOSITORY';

export default [
    {
        provide: DESCRIPTION_REPOSITORY,
        useFactory: (connection: Connection) =>
            connection.getRepository(DescriptionEntity),
        inject: [DATABASE],
    }
];