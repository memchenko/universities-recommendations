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
const user_entity_1 = require("../user/user.entity");
const ALLOWED_VALUES = [
    1,
    0,
].join(',');
let ContactEntity = class ContactEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ContactEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], ContactEntity.prototype, "contactType", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 200,
    }),
    __metadata("design:type", String)
], ContactEntity.prototype, "value", void 0);
__decorate([
    typeorm_1.ManyToOne(_ => user_entity_1.default, user => user.contacts, {
        cascade: ['remove'],
        nullable: false,
    }),
    __metadata("design:type", user_entity_1.default)
], ContactEntity.prototype, "user", void 0);
ContactEntity = __decorate([
    typeorm_1.Entity('contact'),
    typeorm_1.Check(`contact_type IN (${ALLOWED_VALUES})`)
], ContactEntity);
exports.default = ContactEntity;
//# sourceMappingURL=contact.entity.js.map