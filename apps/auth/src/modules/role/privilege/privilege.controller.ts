import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import PrivilegeEntity from './privilege.entity';
import PrivilegeService from './privilege.service';

@Crud({
    model: {
        type: PrivilegeEntity,
    },
})
@Controller('privilege')
export default class PrivilegeController {
    constructor(
        public service: PrivilegeService,
    ) {}
}