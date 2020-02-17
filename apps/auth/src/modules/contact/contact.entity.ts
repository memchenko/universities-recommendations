import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import DictionaryItemEntity from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';

import { IContactEntity } from './types';

@Entity('contact')
export default class ContactEntity implements IContactEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({
    type: 'varchar',
    length: 150,
  })
  public title!: string;

  @OneToOne(_ => DictionaryItemEntity, {
    cascade: ['update'],
    nullable: false,
  })
  @JoinColumn({
    name: 'contact_type_id',
  })
  public contactType!: DictionaryItemEntity<Dictionary.ContactType>;
}
