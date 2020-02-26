import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Check,
} from 'typeorm';

import { IContactEntity } from './types';
import { ContactType } from '../../constants/entities';
import UserEntity from '../user/user.entity';

const ALLOWED_VALUES = [
  ContactType.Email,
  ContactType.Phone,
].join(',');

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
    cascade: ['remove'],
    nullable: false,
  })
  public user!: UserEntity;
}
