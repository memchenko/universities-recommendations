import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import SemesterProgramEntity from './semester-program.entity';
import SemesterProgramService from './semester-program.service';

@Crud({
    model: {
        type: SemesterProgramEntity,
    },
})
@Controller('semester-program')
export default class SemesterProgramController {
    constructor(
        readonly service: SemesterProgramService,
    ) {}
}
