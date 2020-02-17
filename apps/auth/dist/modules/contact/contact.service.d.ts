import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import ContactEntity from './contact.entity';
export default class ContactService extends TypeOrmCrudService<ContactEntity> {
    readonly repository: Repository<ContactEntity>;
    constructor(repository: Repository<ContactEntity>);
}
