import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import CompetitionEntity from './competition.entity';
import CompetitionService from './competition.service';

export const ROUTE = 'competition';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: CompetitionEntity,
    }
})
@Controller(ROUTE)
export default class CompetitionController {
    constructor(
        public service: CompetitionService,
    ) {}
}