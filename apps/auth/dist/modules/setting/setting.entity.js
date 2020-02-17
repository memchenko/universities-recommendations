"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dictionary_item_entity_1 = require("../dictionary/dictionary-item.entity");
let SettingEntity = class SettingEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SettingEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], SettingEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.OneToOne(_ => dictionary_item_entity_1.default, {
        cascade: ['update'],
        nullable: false,
    }),
    typeorm_1.JoinColumn({
        name: 'setting_id',
    }),
    __metadata("design:type", dictionary_item_entity_1.default)
], SettingEntity.prototype, "setting", void 0);
SettingEntity = __decorate([
    typeorm_1.Entity('setting')
], SettingEntity);
exports.default = SettingEntity;
//# sourceMappingURL=setting.entity.js.map