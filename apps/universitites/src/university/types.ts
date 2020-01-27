import FacultyEntity from '../faculty/faculty.entity';
import DescriptionEntity from '../description/description.entity';
import { IAddressEntity } from '../address/types';

export interface IUniversityEntity {
    id: number;
    title: string;
    faculties: FacultyEntity[];
    description: DescriptionEntity;
    addresses: IUniversityAddressEntity[];
}

export interface IUniversityAddressEntity {
    title: string;
    university: IUniversityEntity;
    address: IAddressEntity;
}
