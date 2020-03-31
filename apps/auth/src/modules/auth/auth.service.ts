import { Injectable, ForbiddenException, InternalServerErrorException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { compare, hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { RedisService } from 'nestjs-redis';

import {
  LoginData,
  Tokens,
  JWTUser,
} from './types';

import { IUserEntity } from '../user/types';
import UserEntity from '../user/user.entity';
import SettingEntity from '../setting/setting.entity';

@Injectable()
export default class AuthService {
  private blacklist: ReturnType<RedisService['getClient']>;

  constructor(
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
    private readonly redis: RedisService,
    @InjectRepository(UserEntity)
    private readonly userEnitity: Repository<UserEntity>,
    @InjectRepository(SettingEntity)
    private readonly settingEntity: Repository<SettingEntity>,
  ) {
    this.blacklist = redis.getClient('blacklist');
  }

  public isPasswordCorrect(
    inputPassword: string,
    hash: string,
  ): Promise<boolean> {
    return compare(inputPassword, hash);
  }

  public async login({ id, username, verified }: LoginData): Promise<Tokens> {
    const deleteFromBlacklist = this.blacklist.del(String(id));
    const refreshTTL = Number(this.config.get<string>('REFRESH_TTL'));
    const accessPayload = { id, username, verified };
    const refreshPayload = { id, username, verified };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(accessPayload),
      this.jwtService.signAsync(refreshPayload, {
        expiresIn: refreshTTL,
      }),
      // put it here to parallel operations
      deleteFromBlacklist,
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  public async logout(user: JWTUser): Promise<void> {
    const now = Date.now();
    const { id, exp } = user;
    // exp specified in seconds while now is in milliseconds
    const ttl = (exp * 1000) - now;

    if (ttl <= 0) {
      return;
    }

    await this.blacklist.set(
      String(id),
      null,
      'PX',
      ttl
    );
  }

  public async signin({
    username,
    password,
  }: Omit<IUserEntity, 'verified'>): Promise<Tokens> {
    const passwordHash = await hash(password, 15);
    let user;

    try {
      user = await this.userEnitity.save({
        username,
        password: passwordHash,
        verified: false,
      });
    } catch(err) {
      if (err.message.match(/duplicate key/ig)) {
        throw new ConflictException();
      }

      throw new InternalServerErrorException();
    }
  
    await this.settingEntity.save({ userId: user.id });

    return this.login(user);
  }

  public async isUserBlacklisted({
    id,
  }: Pick<IUserEntity, 'id'>): Promise<boolean> {
    const isIt = await this.blacklist.exists(String(id));
    
    return Boolean(isIt);
  }
}
