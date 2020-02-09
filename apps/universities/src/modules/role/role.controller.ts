import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import RoleEntity from './role.entity';
import RoleService from './role.service';

export const ROUTE = 'role';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: RoleEntity,
    },
})
@Controller(ROUTE)
export default class RoleController {
    constructor(
        readonly service: RoleService,
    ) {}
}