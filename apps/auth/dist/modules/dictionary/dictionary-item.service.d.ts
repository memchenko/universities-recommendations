import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Dictionary } from '../../constants/entities';
import DictionaryItemEntity from './dictionary-item.entity';
export default class DictionaryItemService extends TypeOrmCrudService<DictionaryItemEntity<Dictionary>> {
    readonly repository: Repository<DictionaryItemEntity<Dictionary>>;
    constructor(repository: Repository<DictionaryItemEntity<Dictionary>>);
}
