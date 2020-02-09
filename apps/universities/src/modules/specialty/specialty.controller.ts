import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import SpecialtyEntity from './specialty.entity';
import SpecialtyService from './specialty.service';

@Crud({
    model: {
        type: SpecialtyEntity,
    }
})
@Controller('specialty')
export default class SpecialtyController {
    constructor(
        public service: SpecialtyService,
    ) {}
}