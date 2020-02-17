import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

import { IUserEntity } from '../user/types';
import UserEntity from '../user/user.entity';

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

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

  public login({ username, verified }: Omit<IUserEntity, 'password'>): Tokens {
    const refreshTTL = Number(this.config.get<string>('REFRESH_TTL'));
    const accessPayload = { username, verified };
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
