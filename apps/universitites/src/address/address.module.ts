import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import DatabaseModule from '../database/database.module';

import AddressEntity from './address.entity';
import providers from './address.providers';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([
            AddressEntity,
        ]),
    ],
    exports: providers,
})
export default class AddressModule {}