import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    JoinColumn,
    JoinTable,
    ManyToMany,
} from 'typeorm';

import DepartmentEntity from '../department/department.entity';
import CompetitionEntity from '../competition/competition.entity';
import DescriptionEntity from '../description/description.entity';
import DictionaryItemEntity from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';

import { ISpecialtyEntity } from './types';
import SpecialtyAddressEntity from './specialty-address.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('specialty')
export default class SpecialtyEntity implements ISpecialtyEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id!: number;

    @ApiProperty()
    @Column({
        type: 'varchar',
    })
    public title!: string;

    @ApiProperty()
    @Column({
        type: 'int4',
    })
    public price!: number;

    @ApiProperty()
    @Column({
        type: 'int4',
    })
    public duration!: number;

    @ApiProperty()
    @ManyToOne(_ => DepartmentEntity, department => department.specialties, {
        cascade: ['remove'],
    })
    public department!: DepartmentEntity;

    @ApiProperty()
    @OneToMany(_ => CompetitionEntity, competition => competition.specialty)
    public competitions!: CompetitionEntity[];

    @ApiProperty()
    @OneToOne(_ => DescriptionEntity, {
        cascade: ['update'],
    })
    @JoinColumn({
        name: 'description_id',
    })
    public description!: DescriptionEntity;

    @ApiProperty()
    @ManyToMany(_ => DictionaryItemEntity, {
        cascade: ['remove'],
    })
    @JoinTable({
        name: 'specialty_teaching_type',
        joinColumn: {
            name: 'specialty_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'teaching_type_id',
            referencedColumnName: 'id',
        },
    })
    public teachingType!: DictionaryItemEntity<Dictionary.TeachingType>;

    @ApiProperty()
    @ManyToMany(_ => DictionaryItemEntity, {
        cascade: ['remove'],
    })
    @JoinTable({
        name: 'specialty_payment_type',
        joinColumn: {
            name: 'specialty_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'payment_type_id',
            referencedColumnName: 'id',
        },
    })
    public paymentType!: DictionaryItemEntity<Dictionary.PaymentType>;

    @ApiProperty()
    @OneToMany(_ => SpecialtyAddressEntity, address => address.specialty)
    public addresses!: SpecialtyAddressEntity[];
}
