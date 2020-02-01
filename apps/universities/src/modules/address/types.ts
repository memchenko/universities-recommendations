import { Dictionary } from '../../constants/entities';
import { IDictionaryItemEntity } from '../dictionary/types';

export interface IAddressEntity {
    id: number;
    country: string;
    region: string;
    localityType: IDictionaryItemEntity<Dictionary.LocalityType>;
    locality: string;
    street: string;
    building: string;
    longitude: number;
    latitude: number;
}