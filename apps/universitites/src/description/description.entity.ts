import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('description')
export default class DescriptionEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({ type: 'varchar' })
    public description!: string;
}