import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';

import SettingTypeEntity from './setting-type.entity';
import SettingTypeService from './setting-type.service';

@Crud({
    model: {
        type: SettingTypeEntity,
    },
})
@Controller('setting/type')
export default class SettingTypeController {
    constructor(
        readonly service: SettingTypeService,
    ) {}
}