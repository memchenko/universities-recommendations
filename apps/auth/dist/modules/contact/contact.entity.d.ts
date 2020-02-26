import { IContactEntity } from './types';
import UserEntity from '../user/user.entity';
export default class ContactEntity implements IContactEntity {
    id: number;
    contactType: number;
    value: string;
    user: UserEntity;
}
