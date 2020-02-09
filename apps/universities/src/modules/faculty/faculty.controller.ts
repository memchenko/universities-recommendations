import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import FacultyEntity from './faculty.entity';
import FacultyService from './faculty.service';

export const ROUTE = 'faculty';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: FacultyEntity,
    }
})
@Controller(ROUTE)
export default class FacultyController {
    constructor(
        public service: FacultyService,
    ) {}
}