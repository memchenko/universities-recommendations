import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import DictionaryEntity from './dictionary.entity';
import DictionaryService from './dictionary.service';

@Crud({
    model: {
        type: DictionaryEntity,
    },
})
@Controller('dictionary')
export default class DictionaryController {
    constructor(
        readonly service: DictionaryService,
    ) {}
}
