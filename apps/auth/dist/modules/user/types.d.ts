import { ISettingEntity } from '../setting/types';
import { IRoleEntity } from '../role/types';
import { IFavoriteEntity } from '../favorite/types';
import { IContactEntity } from '../contact/types';
export interface IUserEntity {
    username: string;
    password: string;
    verified: boolean;
    settings: ISettingEntity[];
    roles: IRoleEntity[];
    favorites: IFavoriteEntity[];
    contacts: IContactEntity[];
}
