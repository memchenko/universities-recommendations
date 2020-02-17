import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export default class SessionModule {
    static register(configService: ConfigService): DynamicModule;
}
