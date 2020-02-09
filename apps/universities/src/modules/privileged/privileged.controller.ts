import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import PrivilegedEntity from './privileged.entity';
import PrivilegedService from './privileged.service';

export const ROUTE = 'privileged';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: PrivilegedEntity,
    },
})
@Controller(ROUTE)
export default class PrivilegedController {
    constructor(
        readonly service: PrivilegedService,
    ) {}
}