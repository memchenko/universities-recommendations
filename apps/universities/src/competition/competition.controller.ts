import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import CompetitionEntity from './competition.entity';
import CompetitionService from './competition.service';

@Crud({
    model: {
        type: CompetitionEntity,
    }
})
@Controller('competition')
export default class CompetitionController {
    constructor(
        public service: CompetitionService,
    ) {}
}