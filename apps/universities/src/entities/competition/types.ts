import { ISpecialtyModel } from '@entities/specialty';

export interface ICompetitionModel {
    /** number of covered slots */
    enrollee: number;
    slots: number;
    specialtyId: number;
    specialty: ISpecialtyModel;
}