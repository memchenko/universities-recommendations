import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import DictionaryItemEntity from './dictionary-item.entity';
import DictionaryItemService from './dictionary-item.service';

@Crud({
    model: {
        type: DictionaryItemEntity,
    },
})
@Controller('dictionary-item')
export default class DictionaryItemController {
    constructor(
        readonly service: DictionaryItemService,
    ) {}
}