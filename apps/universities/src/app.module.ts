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
import EnrolleeScoreModule from './enrollee-score/enrollee-score.module';
import PrivilegedModule from './privileged/privileged.module';
import EnroleeRewardModule from './enrollee-reward/enrolee-reward.module';
import RoleModule from './role/role.module';
import CourseModule from './course/course.module';
import CourseLectorEntity from './course-lector/course-lector.entity';
import SemesterModule from './semester/semester.module';
import SemesterProgramModule from './semester-program/semester-program.module';
import AddressModule from './address/address.module';
import DescriptionModule from './description/description.module';
import DictionaryModule from './dictionary/dictionary.module';

@Module({
  imports: [
    AddressModule,
    DescriptionModule,
    CompetitionModule,
    DatabaseModule,
    DepartmentModule,
    FacultyModule,
    GeneralModule,
    SpecialtyModule,
    UniversityModule,
    ThresholdScoreModule,
    EnrolleeScoreModule,
    PrivilegedModule,
    EnroleeRewardModule,
    RoleModule,
    CourseModule,
    CourseLectorEntity,
    SemesterModule,
    SemesterProgramModule,
    DictionaryModule,
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}
