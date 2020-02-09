import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import EnrolleeRewardEntity from './enrollee-reward.entity';
import EnrolleeRewardService from './enrollee-reward.service';

export const ROUTE = 'enrollee-reward';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: EnrolleeRewardEntity,
    },
})
@Controller(ROUTE)
export default class EnroleeRewardController {
    constructor(
        readonly service: EnrolleeRewardService,
    ) {}
}
