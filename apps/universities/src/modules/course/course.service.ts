import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import CourseEntity from './course.entity';

@Injectable()
export default class CourseService extends TypeOrmCrudService<CourseEntity> {
    constructor(
        @InjectRepository(CourseEntity)
        readonly repository: Repository<CourseEntity>,
    ) {
        super(repository);
    }
}