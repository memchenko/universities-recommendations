import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { ISettingTypeEntity } from '../types';
import SettingEntity from '../setting.entity';

@Entity('setting_type')
export default class SettingTypeEntity implements ISettingTypeEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        length: 200,
    })
    public title!: string;

    @OneToMany(_ => SettingEntity, setting => setting.settingType)
    public settings!: SettingEntity[];
}