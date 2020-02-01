import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import DictionaryEntity from './dictionary.entity';
import DictionaryService from './dictionary.service';
import DictionaryController from './dictionary.controller';
import DictionaryListEntity from './dictionary-list.entity';
import DictionaryListService from './dictionary-list.service';
import DictionaryListController from './dictionary-list.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            DictionaryEntity,
            DictionaryListEntity
        ]),
    ],
    exports: [
        DictionaryService,
        DictionaryListService,
    ],
    providers: [
        DictionaryService,
        DictionaryListService,
    ],
    controllers: [
        DictionaryController,
        DictionaryListController,
    ],
})
export default class DictionaryModule {}