import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import FavoriteEntity from './favorite.entity';
import FavoriteService from './favorite.service';

@Crud({
    model: {
        type: FavoriteEntity,
    },
})
@Controller('favorite')
export default class FavoriteController {
    constructor(
        readonly service: FavoriteService,
    ) {}
}
