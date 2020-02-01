import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Check } from 'typeorm';

import { Dictionary } from '../../constants/entities';
import DictionaryItemEntity, { DICTIONARY_ITEM_TABLE } from '../dictionary/dictionary-item.entity';
import { IAddressEntity } from './types';

@Entity('address')
@Check(`"localityType" = ANY(\
    select 'id'\
    from 'universities.${DICTIONARY_ITEM_TABLE}'\
    where 'dictionaryId' = '${Dictionary.LocalityType}'\
)`)
export default class AddressEntity implements IAddressEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
    })
    public country!: string;

    @Column({
        type: 'varchar',
    })
    public region!: string;

    @OneToOne(_ => DictionaryItemEntity)
    @JoinColumn({
        name: 'localityType',
    })
    public localityType!: DictionaryItemEntity<Dictionary.LocalityType>;

    @Column({
        type: 'varchar',
    })
    public locality!: string;

    @Column({
        type: 'varchar',
    })
    public street!: string;

    @Column({
        type: 'varchar',
    })
    public building!: string;

    @Column({
        type: 'float',
    })
    public longitude!: number;

    @Column({
        type: 'float',
    })
    public latitude!: number;
}