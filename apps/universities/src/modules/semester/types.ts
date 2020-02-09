import { ISpecialtyEntity } from '../specialty/types';
import { ICourseEntity } from '../course/types';

export interface ISemesterEntity {
    id: number;
    yearNumber: number;
    startDate: Date;
    endDate: Date;
    specialty: ISpecialtyEntity;
    courses: ICourseEntity[];
}
