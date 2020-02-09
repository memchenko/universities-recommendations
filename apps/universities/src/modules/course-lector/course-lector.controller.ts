import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import CourseLectorEntity from './course-lector.entity';
import CourseLectorService from './course-lector.service';

export const ROUTE = 'course-lector';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: CourseLectorEntity,
    },
})
@Controller(ROUTE)
export default class CourseLectorController {
    constructor(
        readonly service: CourseLectorService,
    ) {}
}
