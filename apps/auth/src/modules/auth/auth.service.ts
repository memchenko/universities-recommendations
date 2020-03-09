import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { compare, hash } from 'bcrypt';
import { Repository } from 'typeorm';

import { IUserEntity } from '../user/types';
import UserEntity from '../user/user.entity';
import { LoginData, Tokens } from './types';

@Injectable()
export default class AuthService {
  constructor(
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly userEnitity: Repository<UserEntity>,
  ) {}

  public isPasswordCorrect(
    inputPassword: string,
    hash: string,
  ): Promise<boolean> {
    return compare(inputPassword, hash);
  }

  public login({ id, username, verified }: LoginData): Tokens {
    const refreshTTL = Number(this.config.get<string>('REFRESH_TTL'));
    const accessPayload = { id, username, verified };
    const refreshPayload = { username };

    return {
      accessToken: this.jwtService.sign(accessPayload),
      refreshToken: this.jwtService.sign(refreshPayload, {
        expiresIn: refreshTTL,
      }),
    };
  }

  public async signin({
    username,
    password,
  }: Omit<IUserEntity, 'verified'>): Promise<Tokens> {
    const passwordHash = await hash(password, 15);
    const user = await this.userEnitity.save({
      username,
      password: passwordHash,
      verified: false,
    });

    return this.login(user);
  }
}
