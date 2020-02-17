import DictionaryItemEntity from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';
import { IRoleEntity } from './types';
export default class RoleEntity implements IRoleEntity {
    id: number;
    title: string;
    role: DictionaryItemEntity<Dictionary.Role>;
}
