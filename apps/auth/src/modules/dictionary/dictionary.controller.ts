import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import DictionaryEntity from './dictionary.entity';
import DictionaryService from './dictionary.service';

export const ROUTE = 'dictionary';

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
