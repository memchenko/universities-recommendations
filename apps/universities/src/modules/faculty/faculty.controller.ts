import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import FacultyEntity from './faculty.entity';
import FacultyService from './faculty.service';

@Crud({
    model: {
        type: FacultyEntity,
    }
})
@Controller('faculty')
export default class FacultyController {
    constructor(
        public service: FacultyService,
    ) {}
}