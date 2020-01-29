import FacultyEntity from '../faculty/faculty.entity';
import DescriptionEntity from '../description/description.entity';
import { IAddressEntity } from '../address/types';
import { IRoleEntity } from '../role/types';

export interface IUniversityEntity {
    id: number;
    title: string;
    faculties: FacultyEntity[];
    description: DescriptionEntity;
    addresses: IUniversityAddressEntity[];
    roles: IRoleEntity[];
}

export interface IUniversityAddressEntity {
    title: string;
    university: IUniversityEntity;
    address: IAddressEntity;
}
