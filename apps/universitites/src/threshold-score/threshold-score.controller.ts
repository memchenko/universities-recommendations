import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import ThresholdScoreEntity from './threshold-score.entity';
import ThresholdScoreService from './threshold-score.service';

@Crud({
    model: {
        type: ThresholdScoreEntity,
    },
})
@Controller('threshold-score')
export default class ThresholdController {
    constructor(
        readonly service: ThresholdScoreService,
    ) {}
}