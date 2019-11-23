import { Model, Table, ForeignKey, Column, DataType } from 'sequelize-typescript';
import SpecialtyModel from '../specialty/Specialty.model';

@Table
export default class CompetitionModel extends Model<CompetitionModel> {
    @Column({
        type: DataType.TINYINT,
    })
    public enrollee!: number;

    @Column({
        type: DataType.TINYINT,
    })
    public slots!: number;

    @ForeignKey(() => SpecialtyModel)
    @Column({
        type: DataType.STRING,
    })
    public specialtyId!: string;
}
