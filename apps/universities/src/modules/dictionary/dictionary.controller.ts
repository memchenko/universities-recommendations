import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import DictionaryEntity from './dictionary.entity';
import DictionaryService from './dictionary.service';

export const ROUTE = 'dictionary';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: DictionaryEntity,
    },
})
@Controller(ROUTE)
export default class DictionaryController {
    constructor(
        readonly service: DictionaryService,
    ) {}
}
