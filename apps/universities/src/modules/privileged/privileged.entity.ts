import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

import DictionaryItemEntity from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';

@Entity('privileged')
export default class PrivilegedEntity {
    @PrimaryGeneratedColumn()
    public id!: number;
    
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
        name: 'privilege_id',
    })
    public privilege!: DictionaryItemEntity<Dictionary.PrivilegeType>;

}