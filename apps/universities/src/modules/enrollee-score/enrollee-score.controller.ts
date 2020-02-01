import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import EnrolleeScoreEntity from './enrollee-score.entity';
import EnrolleeScoreService from './enrollee-score.service';

@Crud({
    model: {
        type: EnrolleeScoreEntity,
    },
})
@Controller('enrollee-score')
export default class EnrolleeScoreController {
    constructor(
        readonly service: EnrolleeScoreService,
    ) {}
}