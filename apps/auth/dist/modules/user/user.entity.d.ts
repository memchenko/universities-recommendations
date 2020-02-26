import { IUserEntity } from './types';
import SettingEntity from '../setting/setting.entity';
import RoleEntity from '../role/role.entity';
import FavoriteEntity from '../favorite/favorite.entity';
import ContactEntity from '../contact/contact.entity';
export default class UserEntity implements IUserEntity {
    username: string;
    password: string;
    verified: boolean;
    settings: SettingEntity[];
    roles: RoleEntity[];
    favorites: FavoriteEntity[];
    contacts: ContactEntity[];
}
