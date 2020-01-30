import { ISpecialtyEntity } from '../specialty/types';

export interface ISemesterEntity {
    id: number;
    yearNumber: number;
    startDate: Date;
    endDate: Date;
    specialty: ISpecialtyEntity;
}
