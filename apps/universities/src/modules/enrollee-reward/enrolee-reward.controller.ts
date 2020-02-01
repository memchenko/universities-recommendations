import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import EnrolleeRewardEntity from './enrollee-reward.entity';
import EnrolleeRewardService from './enrollee-reward.service';

@Crud({
    model: {
        type: EnrolleeRewardEntity,
    },
})
@Controller('enrolee-reward')
export default class EnroleeRewardController {
    constructor(
        readonly service: EnrolleeRewardService,
    ) {}
}
