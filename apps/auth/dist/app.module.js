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
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const database_module_1 = require("./modules/database/database.module");
const user_entity_1 = require("./modules/user/user.entity");
const contact_module_1 = require("./modules/contact/contact.module");
const favorite_module_1 = require("./modules/favorite/favorite.module");
const role_module_1 = require("./modules/role/role.module");
const setting_entity_1 = require("./modules/setting/setting.entity");
const auth_module_1 = require("./modules/auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.default,
            user_entity_1.default,
            contact_module_1.default,
            favorite_module_1.default,
            role_module_1.default,
            setting_entity_1.default,
            auth_module_1.default,
            typeorm_1.TypeOrmModule.forRoot(),
            config_1.ConfigModule.forRoot({
                envFilePath: path_1.join(__dirname, '..', '.dev.env'),
                isGlobal: true,
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map