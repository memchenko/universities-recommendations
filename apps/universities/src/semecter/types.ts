import { ISpecialtyEntity } from '../specialty/types';

export interface ISemecterEntity {
    id: number;
    yearNumber: number;
    startDate: Date;
    endDate: Date;
    specialty: ISpecialtyEntity;
}
