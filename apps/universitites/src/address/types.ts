import { IType } from '../static-tables/types';

export interface IAddressEntity {
    id: number;
    country: string;
    region: string;
    localityType: IType;
    locality: string;
    street: string;
    building: string;
    longitude: number;
    latitude: number;
}