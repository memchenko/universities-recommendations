import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import DepartmentEntity from './department.entity';
import DepartmentService from './department.service';

@Crud({
    model: {
        type: DepartmentEntity,
    }
})
@Controller('department')
export default class DepartmentController {
    constructor(
        public service: DepartmentService,
    ) {}
}