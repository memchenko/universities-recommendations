import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import CourseEntity from './course.entity';
import CourseService from './course.service';

@Crud({
    model: {
        type: CourseEntity,
    },
})
@Controller('course')
export default class CourseController {
    constructor(
        readonly service: CourseService,
    ) {}
}