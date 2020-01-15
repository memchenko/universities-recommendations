import { Controller, Get, Inject } from '@nestjs/common';

import UniversityModel from './university.entity';
import { UNIVERSITY_REPOSITORY } from './university.providers';

@Controller('university')
export default class UniversityController {
    constructor(
        @Inject(UNIVERSITY_REPOSITORY) private readonly model: typeof UniversityModel
    ) {}

    @Get()
    public async create(): Promise<string> {
        await this.model.create({ name: 'ФГБОУ тест' });

        return 'Wow OK!';
    } 
}
