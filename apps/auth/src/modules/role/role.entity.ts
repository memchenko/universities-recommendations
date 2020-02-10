import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

import DictionaryItemEntity from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';

import { IRoleEntity } from './types';

@Entity('role')
export default class RoleEntity implements IRoleEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    public title!: string;

    @OneToOne(_ => DictionaryItemEntity, {
        cascade: ['update'],
        nullable: false,
    })
    @JoinColumn({
        name: 'role_id',
    })
    public role!: DictionaryItemEntity<Dictionary.Role>;
}
