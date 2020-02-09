import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import AddressEntity from './address.entity';
import AddressService from './address.service';

export const ROUTE = 'address';

@ApiTags(ROUTE)
@Crud({
    model: {
        type: AddressEntity,
    },
})
@Controller(ROUTE)
export default class AddressController {
    constructor(
        public readonly service: AddressService,
    ) {}
}