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
const common_1 = require("@nestjs/common");
const setting_entity_1 = require("../setting/setting.entity");
const role_entity_1 = require("../role/role.entity");
const favorite_entity_1 = require("../favorite/favorite.entity");
const contact_entity_1 = require("../contact/contact.entity");
let UserEntity = class UserEntity {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({
        type: 'bool',
        nullable: false,
        default: false,
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "verified", void 0);
__decorate([
    typeorm_1.OneToMany(_ => setting_entity_1.default, setting => setting.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "settings", void 0);
__decorate([
    typeorm_1.ManyToMany(_ => role_entity_1.default, {
        cascade: ['update'],
    }),
    typeorm_1.JoinTable({
        name: 'user_role',
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "roles", void 0);
__decorate([
    typeorm_1.ManyToMany(_ => favorite_entity_1.default, {
        cascade: ['update'],
    }),
    typeorm_1.JoinTable({
        name: 'user_favorite',
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "favorites", void 0);
__decorate([
    typeorm_1.OneToMany(_ => contact_entity_1.default, contact => contact.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "contacts", void 0);
UserEntity = __decorate([
    common_1.Injectable(),
    typeorm_1.Entity('user')
], UserEntity);
exports.default = UserEntity;
//# sourceMappingURL=user.entity.js.map