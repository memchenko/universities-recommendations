import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { omit } from 'ramda';

import { IUserEntity } from '../user/types';
import UserEntity from '../user/user.entity';
import { IRoleEntity, IPrivilegeEntity } from '../role/types';
import { LoginData } from './types';

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

  public login({ id, username, verified, roles }: LoginData): Tokens {
    const refreshTTL = Number(this.config.get<string>('REFRESH_TTL'));
    const privileges = this.collectPrivileges(roles);
    const rolesTitles = roles.map(role => role.title);
    const accessPayload = {
      id, username, verified, privileges,
      roles: rolesTitles,
    };
    const refreshPayload = { username };

    return {
      accessToken: this.jwtService.sign(accessPayload),
      refreshToken: this.jwtService.sign(refreshPayload, {
        expiresIn: refreshTTL,
      }),
    };
  }

  private collectPrivileges(roles: IRoleEntity[]): Omit<IPrivilegeEntity, 'id'>[] {
    const privilegesSet = roles.reduce((acc, { privileges }) => {
      privileges.forEach(({
        id,
        accessType,
        object,
      }) => {
        if (!acc[id]) {
          acc[id] = { accessType, object };
        }
      });

      return acc;
    }, {});
    
    return Object.values(privilegesSet).map(omit('id'));
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
