import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import ThresholdScoreEntity from './threshold-score.entity';
import ThresholdScoreService from './threshold-score.service';

export const ROUTE = 'threshold-score';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: ThresholdScoreEntity,
    },
})
@Controller(ROUTE)
export default class ThresholdController {
    constructor(
        readonly service: ThresholdScoreService,
    ) {}
}