import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Check,
} from 'typeorm';
import { Injectable } from '@nestjs/common';

import { IContactEntity } from './types';
import { ContactType } from '../../constants/entities';
import UserEntity from '../user/user.entity';

const ALLOWED_VALUES = [
  ContactType.Email,
  ContactType.Phone,
].map(value => `'${value}'`).join(',');

@Injectable()
@Entity('contact')
@Check(`contact_type IN (${ALLOWED_VALUES})`)
export default class ContactEntity implements IContactEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({
    type: 'int',
  })
  public contactType!: number;

  @Column({
    type: 'varchar',
    length: 200,
  })
  public value!: string;

  @ManyToOne(_ => UserEntity, user => user.contacts, {
    cascade: ['insert', 'remove'],
    nullable: false,
  })
  public user?: UserEntity;

  @Column({
    type: 'int',
    nullable: false,
  })
  public userId!: number;
}
