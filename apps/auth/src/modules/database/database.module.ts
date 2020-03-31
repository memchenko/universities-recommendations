import { Module } from '@nestjs/common';

import providers from './database.providers';

@Module({
  exports: providers,
  providers,
})
export default class DatabaseModule {}
