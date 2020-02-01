import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import DictionaryEntity from './dictionary.entity';
import DictionaryService from './dictionary.service';
import DictionaryController from './dictionary.controller';
import DictionaryItemEntity from './dictionary-item.entity';
import DictionaryItemService from './dictionary-item.service';
import DictionaryItemController from './dictionary-item.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            DictionaryEntity,
            DictionaryItemEntity,
        ]),
    ],
    exports: [
        DictionaryService,
        DictionaryItemService,
    ],
    providers: [
        DictionaryService,
        DictionaryItemService,
    ],
    controllers: [
        DictionaryController,
        DictionaryItemController,
    ],
})
export default class DictionaryModule {}