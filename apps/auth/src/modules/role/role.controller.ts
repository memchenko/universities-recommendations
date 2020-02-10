import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import RoleEntity from './role.entity';
import RoleService from './role.service';

@Crud({
    model: {
        type: RoleEntity,
    },
})
@Controller('role')
export default class RoleController {
    constructor(
        readonly service: RoleService,
    ) {}
}
