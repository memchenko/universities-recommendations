import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import EnrolleeScoreEntity from './enrollee-score.entity';
import EnrolleeScoreService from './enrollee-score.service';

export const ROUTE = 'enrollee-score';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: EnrolleeScoreEntity,
    },
})
@Controller(ROUTE)
export default class EnrolleeScoreController {
    constructor(
        readonly service: EnrolleeScoreService,
    ) {}
}