"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const setting_entity_1 = require("./setting.entity");
const setting_service_1 = require("./setting.service");
const setting_controller_1 = require("./setting.controller");
const setting_type_entity_1 = require("./setting-type/setting-type.entity");
const setting_type_service_1 = require("./setting-type/setting-type.service");
const setting_type_controller_1 = require("./setting-type/setting-type.controller");
let SettingModule = class SettingModule {
};
SettingModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([setting_entity_1.default, setting_type_entity_1.default])],
        exports: [setting_service_1.default, setting_type_service_1.default],
        providers: [setting_service_1.default, setting_type_service_1.default],
        controllers: [setting_controller_1.default, setting_type_controller_1.default],
    })
], SettingModule);
exports.default = SettingModule;
//# sourceMappingURL=setting.module.js.map