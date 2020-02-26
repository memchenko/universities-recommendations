import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import FavoriteTypeEntity from './favorite-type.entity';
import FavoriteTypeService from './favorite-type.service';

@Crud({
    model: {
        type: FavoriteTypeEntity,
    },
})
@Controller('favorite/type')
export default class FavoriteTypeController {
    constructor(
        readonly service: FavoriteTypeService,
    ) {}
}
