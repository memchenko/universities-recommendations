import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import SpecialtyEntity from './specialty.entity';

@Crud({
    model: {
        type: SpecialtyEntity,
    }
})
@Controller('specialty')
export default class SpecialtyController {
    constructor(
        public service: SpecialtyEntity,
    ) {}
}