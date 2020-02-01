import { Entity, Column, OneToOne, JoinColumn, Check } from 'typeorm';

import DictionaryItemEntity, { DICTIONARY_ITEM_TABLE } from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';

import { IEnrolleeScoreEntity } from './types';

@Entity('enrollee_score')
@Check(`"subject" = ANY(\
    select 'id'\
    from 'universities.${DICTIONARY_ITEM_TABLE}'\
    where 'dictionaryId' = '${Dictionary.Subject}'\
)`)
export default class EnrolleeScoreEntity implements IEnrolleeScoreEntity {
    @Column({
        type: 'int',
        nullable: false,
    })
    public userId!: number;

    @OneToOne(_ => DictionaryItemEntity, {
        cascade: ['remove'],
        nullable: false,
    })
    @JoinColumn({
        name: 'subject',
    })
    public subject!: DictionaryItemEntity<Dictionary.Subject>;

    @Column({
        type: 'int',
        nullable: false,
        default: '0',
    })
    public value!: number;
}
