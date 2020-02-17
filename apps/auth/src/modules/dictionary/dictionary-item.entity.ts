import { Entity, ManyToOne, Column, PrimaryGeneratedColumn } from 'typeorm';

import DictionaryEntity from './dictionary.entity';
import { IDictionaryItemEntity } from './types';

export const DICTIONARY_ITEM_TABLE = 'dictionary_item';

@Entity(DICTIONARY_ITEM_TABLE)
export default class DictionaryItemEntity<EntityType>
  implements IDictionaryItemEntity<EntityType> {
  @PrimaryGeneratedColumn()
  public id!: number;

  @ManyToOne(
    _ => DictionaryEntity,
    dictionary => dictionary.items,
    {
      nullable: false,
      cascade: ['remove'],
    },
  )
  public dictionary!: DictionaryEntity<EntityType>;

  @Column({
    type: 'varchar',
  })
  public title!: string;
}
