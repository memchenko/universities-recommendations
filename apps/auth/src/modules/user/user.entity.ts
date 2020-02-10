import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

import DictionaryItemEntity from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';

import { IUserEntity } from './types';

@Entity('user')
export default class UserEntity implements IUserEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    public firstName!: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true,
    })
    public lastName!: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true,
    })
    public middleName!: string;

    @Column({
        type: 'date',
        nullable: true,
    })
    public birthDate!: Date;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    public password!: string;

    @OneToOne(_ => DictionaryItemEntity, {
        cascade: ['update'],
        nullable: true,
    })
    @JoinColumn({
        name: 'gender_id',
    })
    public gender!: DictionaryItemEntity<Dictionary.Gender>;
}
