import { IDictionaryItemEntity } from '../dictionary/types';
import { Dictionary } from '../../constants/entities';

export interface IRoleEntity {
  id: number;
  title: string;
  role: IDictionaryItemEntity<Dictionary.Role>;
}
