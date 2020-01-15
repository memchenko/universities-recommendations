import { Module } from '@nestjs/common';

import providers from './database.providers';

@Module({
    providers,
    exports: providers,
})
export default class DatabaseModule {
    
}