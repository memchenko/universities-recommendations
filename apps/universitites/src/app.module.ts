import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import CompetitionModule from './competition/competition.module';
import DepartmentModule from './department/department.module';
import FacultyModule from './faculty/faculty.module';
import DatabaseModule from './database/database.module';
import GeneralModule from './general/general.module';
import SpecialtyModule from './specialty/specialty.module';
import UniversityModule from './university/university.module';
import ThresholdScoreModule from './threshold-score/threshold-score.module';

@Module({
  imports: [
    CompetitionModule,
    DatabaseModule,
    DepartmentModule,
    FacultyModule,
    GeneralModule,
    SpecialtyModule,
    UniversityModule,
    ThresholdScoreModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
