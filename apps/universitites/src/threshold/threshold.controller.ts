import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import ThresholdEntity from './threshold.entity';
import ThresholdService from './threshold.service';

@Crud({
    model: {
        type: ThresholdEntity,
    },
})
@Controller('threshold')
export default class ThresholdController {
    constructor(
        readonly service: ThresholdService,
    ) {}
}