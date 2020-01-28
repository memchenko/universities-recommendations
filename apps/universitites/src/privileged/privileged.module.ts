import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import PrivilegedEntity from './privileged.entity';
import PrivilegedService from './privileged.service';
import PrivilegedController from './privileged.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([PrivilegedEntity]),
    ],
    exports: [
        PrivilegedService,
    ],
    providers: [
        PrivilegedService,
    ],
    controllers: [
        PrivilegedController,
    ],
})
export default class PrivilegedModule {}