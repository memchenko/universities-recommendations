import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import SemesterEntity from './semester.entity';
import SemesterService from './semester.service';

@Crud({
    model: {
        type: SemesterEntity,
    },
})
@Controller('semester')
export default class SemesterController {
    constructor(
        readonly service: SemesterService,
    ) {}
}
