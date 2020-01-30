import { IDescriptionEntity } from '../description/types';
import { IUniversityEntity } from '../university/types';

export interface ICourseEntity {
    id: number;
    title: string;
    description: IDescriptionEntity;
    university: IUniversityEntity;
}