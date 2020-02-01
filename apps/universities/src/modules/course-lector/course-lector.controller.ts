import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import CourseLectorEntity from './course-lector.entity';
import CourseLectorService from './course-lector.service';

@Crud({
    model: {
        type: CourseLectorEntity,
    },
})
@Controller('course-lector')
export default class CourseLectorController {
    constructor(
        readonly service: CourseLectorService,
    ) {}
}
