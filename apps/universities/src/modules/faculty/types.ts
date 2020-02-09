import { IUniversityEntity } from '../university/types';
import { IDepartmentEntity } from '../department/types';
import { IDescriptionEntity } from '../description/types';
import { IAddressEntity } from '../address/types';

export interface IFacultyEntity {
    id: number;
    title: string;
    university: IUniversityEntity;
    departments: IDepartmentEntity[];
    description: IDescriptionEntity;
    addresses: IFacultyAddressEntity[];
}

export interface IFacultyAddressEntity {
    id: number;
    title: string;
    faculty: IFacultyEntity;
    address: IAddressEntity;
}