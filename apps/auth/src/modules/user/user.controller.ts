import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { AuthGuard } from '@nestjs/passport';

import UserEntity from './user.entity';
import UserService from './user.service';
import PrivilegeGuard from '../auth/guards/privilege.guard';

@Crud({
  model: {
    type: UserEntity,
  },
  query: {
    join: {
      contacts: {
        alias: 'contacts',
      },
      settings: {
        alias: 'settings',
      },
      favorites: {
        alias: 'favorites',
      },
    },
  },
})
@Controller('user')
@UseGuards(AuthGuard('jwt'), PrivilegeGuard)
export default class UserController {
  constructor(readonly service: UserService) {}
}
