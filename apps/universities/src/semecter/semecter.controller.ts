import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import SemecterEntity from './semecter.entity';
import SemecterService from './semecter.service';

@Crud({
    model: {
        type: SemecterEntity,
    },
})
@Controller('semecter')
export default class SemecterController {
    constructor(
        readonly service: SemecterService,
    ) {}
}
