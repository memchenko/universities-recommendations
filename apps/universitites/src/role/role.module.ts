import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RoleEntity from './role.entity';
import RoleService from './role.service';
import RoleController from './role.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([RoleEntity]),
    ],
    exports: [
        RoleService,
    ],
    providers: [
        RoleService,
    ],
    controllers: [
        RoleController,
    ],
})
export default class RoleModule {}