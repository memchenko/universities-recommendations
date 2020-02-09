import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import UniversityEntity from './university.entity';
import UniversityService from './university.service';

export const ROUTE = 'university';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: UniversityEntity,
    }
})
@Controller(ROUTE)
export default class UniversityController {
    constructor(
        public service: UniversityService,
    ) {}
}
