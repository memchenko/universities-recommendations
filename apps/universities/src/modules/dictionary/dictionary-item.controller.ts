import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import DictionaryItemEntity from './dictionary-item.entity';
import DictionaryItemService from './dictionary-item.service';

export const ROUTE = 'dictionary-item';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: DictionaryItemEntity,
    },
})
@Controller(ROUTE)
export default class DictionaryItemController {
    constructor(
        readonly service: DictionaryItemService,
    ) {}
}