import { 
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Exclude } from 'class-transformer';

import { IUserEntity } from './types';
import ContactEntity from '../contact/contact.entity';

@Injectable()
@Entity('user')
export default class UserEntity implements IUserEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({
    type: 'varchar',
    unique: true,
  })
  public username!: string;

  @Exclude()
  @Column({
    type: 'varchar',
    nullable: false,
  })
  public password!: string;

  @Column({
    type: 'bool',
    nullable: false,
    default: false,
  })
  public verified!: boolean;

  @OneToMany(_ => ContactEntity, contact => contact.user)
  public contacts!: ContactEntity[];
}
