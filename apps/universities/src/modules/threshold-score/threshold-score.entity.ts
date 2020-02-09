import {
    Entity,
    ManyToOne,
    OneToOne,
    JoinColumn,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import CompetitionEntity from '../competition/competition.entity';
import DictionaryItemEntity from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';

import { IThresholdScoreEntity } from './types';

@Entity('threshold_score')
export default class ThresholdScoreEntity implements IThresholdScoreEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id!: number;

    @ManyToOne(_ => CompetitionEntity, competition => competition.thresholds)
    public competition!: CompetitionEntity;

    @ApiProperty()
    @OneToOne(_ => DictionaryItemEntity, {
        cascade: ['remove'],
        nullable: false,
    })
    @JoinColumn({
        name: 'subject_id',
    })
    public subject!: DictionaryItemEntity<Dictionary.Subject>;

    @ApiProperty()
    @Column({
        type: 'int4',
        nullable: false,
        default: '0',
    })
    public value!: number;
}