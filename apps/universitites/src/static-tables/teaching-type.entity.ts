import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('teaching_type')
export default class TeachingTypeEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({
        type: 'varchar',
        unique: true,
    })
    public title!: string;
}
