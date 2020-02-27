import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RoleEntity from './role.entity';
import RoleService from './role.service';
import RoleController from './role.controller';
import PrivilegeEntity from './privilege/privilege.entity';
import PrivilegeService from './privilege/privilege.service';
import PrivilegeController from './privilege/privilege.controller';
import RolePrivilegeEntity from './role-privilege.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    RoleEntity,
    PrivilegeEntity,
    RolePrivilegeEntity,
  ])],
  exports: [RoleService, PrivilegeService],
  providers: [RoleService, PrivilegeService],
  controllers: [RoleController, PrivilegeController],
})
export default class RoleModule {}
