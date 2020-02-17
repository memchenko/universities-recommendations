import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { IUserEntity } from '../user/types';
import UserEntity from '../user/user.entity';
export declare type Tokens = {
    accessToken: string;
    refreshToken: string;
};
export default class AuthService {
    private readonly config;
    private readonly jwtService;
    private readonly userEnitity;
    constructor(config: ConfigService, jwtService: JwtService, userEnitity: Repository<UserEntity>);
    isPasswordCorrect(inputPassword: string, hash: string): Promise<boolean>;
    login({ username, verified, }: Omit<IUserEntity, 'password'>): Tokens;
    signin({ username, password, }: Omit<IUserEntity, 'verified'>): Promise<Tokens>;
}
