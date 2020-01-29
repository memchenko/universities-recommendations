import FacultyEntity from '../faculty/faculty.entity';
import DescriptionEntity from '../description/description.entity';
import { IAddressEntity } from '../address/types';
import { IRoleEntity } from '../role/types';
import { ICourseEntity } from '../course/types';

export interface IUniversityEntity {
    id: number;
    title: string;
    description: DescriptionEntity;
    faculties: FacultyEntity[];
    addresses: IUniversityAddressEntity[];
    roles: IRoleEntity[];
    courses: ICourseEntity[];
}

export interface IUniversityAddressEntity {
    title: string;
    university: IUniversityEntity;
    address: IAddressEntity;
}
