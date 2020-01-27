import { Connection } from 'typeorm';

import { DATABASE } from '../database/database.providers';

import PaymentTypeEntity from './payment-type.entity';
import TeachingTypeEntity from './teaching-type.entity';

export const enum Repositories {
    PaymentType = 'PAYMENT_TYPE',
    TeachingType = 'TEACHING_TYPE',
}

export default [
    {
        provide: Repositories.PaymentType,
        useFactory: (connection: Connection) =>
            connection.getRepository(PaymentTypeEntity),
        inject: [DATABASE],
    },
    {
        provide: Repositories.TeachingType,
        useFactory: (connection: Connection) =>
            connection.getRepository(TeachingTypeEntity),
        inject: [DATABASE],
    },
];