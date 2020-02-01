import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import DictionaryListEntity from './dictionary-list.entity';
import DictionaryListService from './dictionary-list.service';

@Crud({
    model: {
        type: DictionaryListEntity,
    },
})
@Controller('dictionary-list')
export default class DictionaryListController {
    constructor(
        readonly service: DictionaryListService,
    ) {}
}