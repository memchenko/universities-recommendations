import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, JoinColumn, JoinTable, ManyToMany, Check } from 'typeorm';

import DepartmentEntity from '../department/department.entity';
import CompetitionEntity from '../competition/competition.entity';
import DescriptionEntity from '../description/description.entity';
import DictionaryItemEntity, { DICTIONARY_ITEM_TABLE } from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';

import { ISpecialtyEntity } from './types';
import SpecialtyAddressEntity from './specialty-address.entity';

@Entity('specialty')
@Check(`"teachingType" = ANY(\
    select 'id'\
    from 'universities.${DICTIONARY_ITEM_TABLE}'\
    where 'dictionaryId' = ${Dictionary.TeachingType}\
)`)
@Check(`"paymentType" = ANY(\
    select 'id'\
    from 'universities.${DICTIONARY_ITEM_TABLE}'\
    where 'dictionaryId' = ${Dictionary.PaymentType}\
)`)
export default class SpecialtyEntity implements ISpecialtyEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
    })
    public title!: string;

    @Column({
        type: 'int4',
    })
    public price!: number;

    @Column({
        type: 'int4',
    })
    public duration!: number;

    @ManyToOne(_ => DepartmentEntity, department => department.specialties, {
        cascade: ['remove'],
    })
    public department!: DepartmentEntity;

    @OneToMany(_ => CompetitionEntity, competition => competition.specialty)
    public competitions!: CompetitionEntity[];

    @OneToOne(_ => DescriptionEntity, {
        cascade: ['update'],
    })
    @JoinColumn({
        name: 'description',
    })
    public description!: DescriptionEntity;

    @ManyToMany(_ => DictionaryItemEntity, {
        cascade: ['remove'],
    })
    @JoinTable({
        name: 'specialty_teaching_types',
        joinColumn: {
            name: 'teachingType',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'specialty',
            referencedColumnName: 'id',
        },
    })
    public teachingType!: DictionaryItemEntity<Dictionary.TeachingType>;

    @ManyToMany(_ => DictionaryItemEntity, {
        cascade: ['remove'],
    })
    @JoinTable({
        name: 'specialty_payment_types',
        joinColumn: {
            name: 'paymentType',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'specialty',
            referencedColumnName: 'id',
        },
    })
    public paymentType!: DictionaryItemEntity<Dictionary.PaymentType>;

    @OneToMany(_ => SpecialtyAddressEntity, address => address.specialty)
    public addresses!: SpecialtyAddressEntity[];
}
