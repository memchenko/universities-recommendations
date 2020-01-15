import { ISpecialtyModel } from '../specialty/types';

export interface ICompetitionModel {
    /** number of covered slots */
    enrollee: number;
    slots: number;
    specialty: ISpecialtyModel;
}
