import { Entity, Column, OneToOne, JoinColumn, Check } from 'typeorm';

import DictionaryItemEntity, { DICTIONARY_ITEM_TABLE } from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';

@Entity('privileged')
@Check(`"privilege" = ANY(\
    select 'id'\
    from 'universities.${DICTIONARY_ITEM_TABLE}'\
    where 'dictionaryId' = '${Dictionary.PrivilegeType}'\
)`)
export default class PrivilegedEntity {
    @Column({
        type: 'int',
        nullable: false,
    })
    public userId!: number;

    @OneToOne(_ => DictionaryItemEntity, {
        cascade: ['update'],
        nullable: false,
    })
    @JoinColumn({
        name: 'privilege',
    })
    public privilege!: DictionaryItemEntity<Dictionary.PrivilegeType>;

}