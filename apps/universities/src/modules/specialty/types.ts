import { IDepartmentEntity } from '../department/types';
import { ICompetitionEntity } from '../competition/types';
import { IDescriptionEntity } from '../description/types';
import { IAddressEntity } from '../address/types';
import { IDictionaryItemEntity } from '../dictionary/types';
import { Dictionary } from '../../constants/entities';

export interface ISpecialtyEntity {
    id: number;
    title: string;
    department: IDepartmentEntity;
    competitions: ICompetitionEntity[];
    description: IDescriptionEntity;
    teachingType: IDictionaryItemEntity<Dictionary.TeachingType>;
    paymentType: IDictionaryItemEntity<Dictionary.PaymentType>;
    price: number;
    duration: number;
    addresses: ISpecialtyAddressEntity[];
}

export interface ISpecialtyAddressEntity {
    id: number;
    title: string;
    specialty: ISpecialtyEntity;
    address: IAddressEntity;
}
