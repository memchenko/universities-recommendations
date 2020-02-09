import {
    Entity,
    Column,
    OneToOne,
    JoinColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import DictionaryItemEntity from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';

@Entity('privileged')
export default class PrivilegedEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id!: number;
    
    @ApiProperty()
    @Column({
        type: 'int',
        nullable: false,
    })
    public userId!: number;

    @ApiProperty()
    @OneToOne(_ => DictionaryItemEntity, {
        cascade: ['update'],
        nullable: false,
    })
    @JoinColumn({
        name: 'privilege_id',
    })
    public privilege!: DictionaryItemEntity<Dictionary.PrivilegeType>;

}