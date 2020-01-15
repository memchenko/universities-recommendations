import { ISpecialtyModel } from '../types';

export interface ISpecialtyDescriptionModel {
    specialtyId: number;
    specialty: ISpecialtyModel;
    value: string;
}