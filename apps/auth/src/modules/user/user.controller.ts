import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import UserEntity from './user.entity';
import UserService from './user.service';

@Crud({
  model: {
    type: UserEntity,
  },
})
@Controller('user')
export default class UserController {
  constructor(readonly service: UserService) {}
}
