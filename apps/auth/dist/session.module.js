"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SessionModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const nestjs_redis_1 = require("nestjs-redis");
let SessionModule = SessionModule_1 = class SessionModule {
    static register(configService) {
        return {
            module: SessionModule_1,
            imports: [
                nestjs_redis_1.RedisModule.register({
                    name: 'session',
                    port: configService.get('REDIS_PORT'),
                    host: configService.get('REDIS_HOST'),
                }),
            ],
        };
    }
};
SessionModule = SessionModule_1 = __decorate([
    common_1.Module({})
], SessionModule);
exports.default = SessionModule;
//# sourceMappingURL=session.module.js.map