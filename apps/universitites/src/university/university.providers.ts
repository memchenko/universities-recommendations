import { Connection } from 'typeorm';

import { DATABASE } from '../database/database.providers';
import UniversityEntity from './university.entity';

export const UNIVERSITY_REPOSITORY = 'UNIVERSITY_REPOSITORY';

export default [
    {
        provide: UNIVERSITY_REPOSITORY,
        useFactory: (connection: Connection) => connection.getRepository(UniversityEntity),
        inject: [DATABASE],
    }
]