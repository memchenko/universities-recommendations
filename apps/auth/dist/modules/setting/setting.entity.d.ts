import DictionaryItemEntity from '../dictionary/dictionary-item.entity';
import { Dictionary } from '../../constants/entities';
import { ISettingEntity } from './types';
export default class SettingEntity implements ISettingEntity {
    id: number;
    title: string;
    setting: DictionaryItemEntity<Dictionary.Setting>;
}
