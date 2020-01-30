import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import PrivilegedEntity from './privileged.entity';
import PrivilegedService from './privileged.service';

@Crud({
    model: {
        type: PrivilegedEntity,
    },
})
@Controller('priileged')
export default class PrivilegedController {
    constructor(
        readonly service: PrivilegedService,
    ) {}
}