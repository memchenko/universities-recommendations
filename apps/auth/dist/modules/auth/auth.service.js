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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../user/user.entity");
let AuthService = class AuthService {
    constructor(config, jwtService, userEnitity) {
        this.config = config;
        this.jwtService = jwtService;
        this.userEnitity = userEnitity;
    }
    isPasswordCorrect(inputPassword, hash) {
        return bcrypt_1.compare(inputPassword, hash);
    }
    login({ username, verified }) {
        const refreshTTL = Number(this.config.get('REFRESH_TTL'));
        const accessPayload = { username, verified };
        const refreshPayload = { username };
        return {
            accessToken: this.jwtService.sign(accessPayload),
            refreshToken: this.jwtService.sign(refreshPayload, {
                expiresIn: refreshTTL,
            }),
        };
    }
    async signin({ username, password, }) {
        const passwordHash = await bcrypt_1.hash(password, 15);
        const user = await this.userEnitity.save({
            username,
            password: passwordHash,
            verified: false,
        });
        return this.login(user);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(2, typeorm_1.InjectRepository(user_entity_1.default)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        jwt_1.JwtService,
        typeorm_2.Repository])
], AuthService);
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map