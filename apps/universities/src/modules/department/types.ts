import { IFacultyEntity } from '../faculty/types';
import { ISpecialtyEntity } from '../specialty/types';
import { IDescriptionEntity } from '../description/types';
import { IAddressEntity } from '../address/types';

export interface IDepartmentEntity {
    id: number;
    title: string;
    faculty: IFacultyEntity;
    specialties: ISpecialtyEntity[];
    description: IDescriptionEntity;
    addresses: IDepartmentAddressEntity[];
}

export interface IDepartmentAddressEntity {
    id: number;
    title: string;
    department: IDepartmentEntity;
    address: IAddressEntity;
}
