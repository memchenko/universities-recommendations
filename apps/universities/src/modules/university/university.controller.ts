import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import UniversityEntity from './university.entity';
import UniversityService from './university.service';

@Crud({
    model: {
        type: UniversityEntity,
    }
})
@Controller('university')
export default class UniversityController {
    constructor(
        public service: UniversityService,
    ) {}
}
