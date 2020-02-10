import { IDictionaryItemEntity } from '../dictionary/types';

import { Dictionary } from '../../constants/entities';

export interface IUserEntity {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    birthDate: Date;
    gender: IDictionaryItemEntity<Dictionary.Gender>;  
    password: string;  
}
