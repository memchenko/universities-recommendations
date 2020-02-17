import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Dictionary } from '../../constants/entities';
import DictionaryEntity from './dictionary.entity';
export default class DictionaryService extends TypeOrmCrudService<DictionaryEntity<Dictionary>> {
    readonly repository: Repository<DictionaryEntity<Dictionary>>;
    constructor(repository: Repository<DictionaryEntity<Dictionary>>);
}
