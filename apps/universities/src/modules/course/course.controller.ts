import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import CourseEntity from './course.entity';
import CourseService from './course.service';

const ROUTE = 'course';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: CourseEntity,
    },
})
@Controller(ROUTE)
export default class CourseController {
    constructor(
        readonly service: CourseService,
    ) {}
}