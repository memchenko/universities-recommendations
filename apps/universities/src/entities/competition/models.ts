import { Model, Table, ForeignKey, Column } from 'sequelize-typescript';
import { SpecialtyModel } from '../specialty/models';

@Table
export class CompetitionModel extends Model<CompetitionModel> {
    @Column
    enrollee!: number;

    @Column
    slots!: number;

    @ForeignKey(() => SpecialtyModel)
    @Column
    specialtyId!: string;
}
