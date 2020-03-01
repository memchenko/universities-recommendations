import { Entity, Check, PrimaryGeneratedColumn, Column } from 'typeorm';

import { IPrivilegeEntity } from '../types';
import { PrivilegeType } from '../../../constants/entities';

const ALLOWED_VALUES = [
    PrivilegeType.Read,
    PrivilegeType.Write,
    PrivilegeType.ReadWrite,
].map(value => `'${value}'`).join(',');

@Entity('privilege')
@Check(`access_type IN (${ALLOWED_VALUES})`)
export default class PrivilegeEntity implements IPrivilegeEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        length: 100,
    })
    public object!: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    public accessType!: PrivilegeType;
}
