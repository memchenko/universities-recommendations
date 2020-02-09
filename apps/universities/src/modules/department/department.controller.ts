import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import DepartmentEntity from './department.entity';
import DepartmentService from './department.service';

export const ROUTE = 'department';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: DepartmentEntity,
    }
})
@Controller(ROUTE)
export default class DepartmentController {
    constructor(
        public service: DepartmentService,
    ) {}
}