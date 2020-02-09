import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IEnrolleeRewardEntity } from './types';

@Entity('enrollee_reward')
export default class EnrolleeRewardEntity implements IEnrolleeRewardEntity {
    @PrimaryGeneratedColumn()
    public id!: number;
    
    @Column({
        type: 'int',
        nullable: false,
    })
    public userId!: number;

    @Column({
        type: 'int',
        nullable: false,
    })
    public fileId!: number;

    @Column({
        type: 'varchar',
        length: 250,
    })
    public title!: string;

    @Column({
        type: 'varchar',
        length: 1000,
    })
    public description!: string;
}