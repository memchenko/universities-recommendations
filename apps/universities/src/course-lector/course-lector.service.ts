import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import CourseLectorEntity from './course-lector.entity';

@Injectable()
export default class CourseLectorService extends TypeOrmCrudService<CourseLectorEntity>{
    constructor(
        @InjectRepository(CourseLectorEntity)
        readonly repository: Repository<CourseLectorEntity>,
    ) {
        super(repository);
    }
}
