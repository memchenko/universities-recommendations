import { Connection } from 'typeorm';

import { DATABASE } from '../database/database.providers';

import PaymentTypeEntity from './payment-type.entity';
import TeachingTypeEntity from './teaching-type.entity';
import LocalityTypeEntity from './locality-type.entity';
import SubjectEntity from './subject.entity';

export const enum Repositories {
    PaymentType = 'PAYMENT_TYPE',
    TeachingType = 'TEACHING_TYPE',
    LocalityType = 'LOCALITY_TYPE',
    Subject = 'SUBJECT',
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
    {
        provide: Repositories.LocalityType,
        useFactory: (connection: Connection) =>
            connection.getRepository(LocalityTypeEntity),
        inject: [DATABASE],
    },
    {
        provide: Repositories.Subject,
        useFactory: (connection: Connection) =>
            connection.getRepository(SubjectEntity),
        inject: [DATABASE],
    },
];