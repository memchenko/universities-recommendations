import FacultyEntity from '../faculty/faculty.entity';
import DescriptionEntity from '../description/description.entity';
import { IAddressEntity } from '../address/types';
import { IRoleEntity } from '../role/types';

export interface IUniversityEntity {
    id: number;
    title: string;
    description: DescriptionEntity;
    faculties: FacultyEntity[];
    addresses: IUniversityAddressEntity[];
    roles: IRoleEntity[];
}

export interface IUniversityAddressEntity {
    id: number;
    title: string;
    university: IUniversityEntity;
    address: IAddressEntity;
}
