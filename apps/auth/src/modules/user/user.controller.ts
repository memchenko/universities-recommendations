import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { AuthGuard } from '@nestjs/passport';

import UserEntity from './user.entity';
import UserService from './user.service';

@Crud({
  model: {
    type: UserEntity,
  },
  routes: {
    getOneBase: {
      decorators: [
        UseGuards(AuthGuard('jwt')),
      ],
    },
  },
})
@Controller('user')
export default class UserController {
  constructor(readonly service: UserService) {}
}
