import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import ContactEntity from './contact.entity';
import ContactService from './contact.service';
import ContactController from './contact.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity])],
  exports: [ContactService],
  providers: [ContactService],
  controllers: [ContactController],
})
export default class ContactModule {}
