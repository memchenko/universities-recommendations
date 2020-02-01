import { ITypeEntity } from '../static-tables/types';

export interface IAddressEntity {
    id: number;
    country: string;
    region: string;
    localityType: ITypeEntity;
    locality: string;
    street: string;
    building: string;
    longitude: number;
    latitude: number;
}