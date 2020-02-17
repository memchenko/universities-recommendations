import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import SettingEntity from './setting.entity';
import SettingService from './setting.service';

@Crud({
  model: {
    type: SettingEntity,
  },
})
@Controller('setting')
export default class SettingController {
  constructor(readonly service: SettingService) {}
}
