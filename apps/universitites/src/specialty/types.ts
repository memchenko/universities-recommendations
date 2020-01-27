import { IDepartmentEntity } from '../department/types';
import { ICompetitionEntity } from '../competition/types';
import { IDescriptionEntity } from '../description/types';
import { IAddressEntity } from '../address/types';
import { ITypeEntity } from '../static-tables/types';

export interface ISpecialtyEntity {
    id: number;
    title: string;
    department: IDepartmentEntity;
    competitions: ICompetitionEntity[];
    description: IDescriptionEntity;
    teachingType: ITypeEntity;
    paymentType: ITypeEntity;
    price: number;
    duration: number;
    addresses: ISpecialtyAddressEntity[];
}

export interface ISpecialtyAddressEntity {
    title: string;
    specialty: ISpecialtyEntity;
    address: IAddressEntity;
}
