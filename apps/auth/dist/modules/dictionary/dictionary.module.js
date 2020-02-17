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
const dictionary_entity_1 = require("./dictionary.entity");
const dictionary_service_1 = require("./dictionary.service");
const dictionary_controller_1 = require("./dictionary.controller");
const dictionary_item_entity_1 = require("./dictionary-item.entity");
const dictionary_item_service_1 = require("./dictionary-item.service");
const dictionary_item_controller_1 = require("./dictionary-item.controller");
let DictionaryModule = class DictionaryModule {
};
DictionaryModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                dictionary_entity_1.default,
                dictionary_item_entity_1.default,
            ]),
        ],
        exports: [
            dictionary_service_1.default,
            dictionary_item_service_1.default,
        ],
        providers: [
            dictionary_service_1.default,
            dictionary_item_service_1.default,
        ],
        controllers: [
            dictionary_controller_1.default,
            dictionary_item_controller_1.default,
        ],
    })
], DictionaryModule);
exports.default = DictionaryModule;
//# sourceMappingURL=dictionary.module.js.map