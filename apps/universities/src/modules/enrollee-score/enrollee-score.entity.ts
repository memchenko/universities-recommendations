import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

import DictionaryItemEntity from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';

import { IEnrolleeScoreEntity } from './types';

@Entity('enrollee_score')
export default class EnrolleeScoreEntity implements IEnrolleeScoreEntity {
    @PrimaryGeneratedColumn()
    public id!: number;
    
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
        name: 'subject_id',
    })
    public subject!: DictionaryItemEntity<Dictionary.Subject>;

    @Column({
        type: 'int',
        nullable: false,
        default: '0',
    })
    public value!: number;
}
