import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import SpecialtyEntity from './specialty.entity';
import SpecialtyService from './specialty.service';

export const ROUTE = 'specialty';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: SpecialtyEntity,
    }
})
@Controller(ROUTE)
export default class SpecialtyController {
    constructor(
        public service: SpecialtyService,
    ) {}
}