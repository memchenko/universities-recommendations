import { Model, Table, ForeignKey, Column, DataType, BelongsTo } from 'sequelize-typescript';

import { SpecialtyModel } from '@entities/specialty';

import { ICompetitionModel } from '.';

@Table
export default class CompetitionModel extends Model<ICompetitionModel> {
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
        type: DataType.NUMBER,
    })
    public specialtyId!: number;

    @BelongsTo(() => SpecialtyModel)
    public specialty!: SpecialtyModel;
}
