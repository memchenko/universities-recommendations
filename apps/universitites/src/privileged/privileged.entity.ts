import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';

import PrivilegeTypeEntity from '../static-tables/privilege-type.entity';

@Entity('privileged')
export default class PrivilegedEntity {
    @Column({
        type: 'int',
        nullable: false,
    })
    public userId!: number;

    @OneToOne(_ => PrivilegeTypeEntity)
    @JoinColumn()
    public privilege!: PrivilegeTypeEntity;

}