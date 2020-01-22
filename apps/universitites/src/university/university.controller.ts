import { Controller, Get, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import UniversityEntity from './university.entity';
import { UNIVERSITY_REPOSITORY } from './university.providers';

@Controller('university')
export default class UniversityController {
    constructor(
        @Inject(UNIVERSITY_REPOSITORY)
        private readonly repository: Repository<UniversityEntity>
    ) {}

    @Get()
    public async create(): Promise<string> {
        const university = new UniversityEntity();
        university.title = 'ФГБОУ тест';

        await this.repository.insert(university);

        return 'Wow OK!';
    } 
}
