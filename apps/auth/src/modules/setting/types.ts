import { IDictionaryItemEntity } from '../dictionary/types';
import { Dictionary } from '../../constants/entities';

export interface ISettingEntity {
  id: number;
  title: string;
  setting: IDictionaryItemEntity<Dictionary.Setting>;
}
