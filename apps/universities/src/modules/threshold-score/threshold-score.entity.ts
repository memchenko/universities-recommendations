import { Entity, ManyToOne, OneToOne, JoinColumn, Column, Check } from 'typeorm';

import CompetitionEntity from '../competition/competition.entity';
import DictionaryItemEntity, { DICTIONARY_ITEM_TABLE } from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';

import { IThresholdScoreEntity } from './types';

@Entity('threshold_score')
@Check(`"subject" = ANY(\
    select 'id'\
    from 'universities.${DICTIONARY_ITEM_TABLE}'\
    where 'dictionaryId' = ${Dictionary.Subject}\
)`)
export default class ThresholdScoreEntity implements IThresholdScoreEntity {
    @ManyToOne(_ => CompetitionEntity, competition => competition.thresholds)
    public competition!: CompetitionEntity;

    @OneToOne(_ => DictionaryItemEntity, {
        cascade: ['remove'],
        nullable: false,
    })
    @JoinColumn({
        name: 'subject',
    })
    public subject!: DictionaryItemEntity<Dictionary.Subject>;

    @Column({
        type: 'int4',
        nullable: false,
        default: '0',
    })
    public value!: number;
}