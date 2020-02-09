import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import SemesterEntity from './semester.entity';
import SemesterService from './semester.service';

export const ROUTE = 'semester';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: SemesterEntity,
    },
})
@Controller(ROUTE)
export default class SemesterController {
    constructor(
        readonly service: SemesterService,
    ) {}
}
