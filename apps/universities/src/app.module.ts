import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import CompetitionModule from './modules/competition/competition.module';
import DepartmentModule from './modules/department/department.module';
import FacultyModule from './modules/faculty/faculty.module';
import DatabaseModule from './modules/database/database.module';
import GeneralModule from './modules/general/general.module';
import SpecialtyModule from './modules/specialty/specialty.module';
import UniversityModule from './modules/university/university.module';
import ThresholdScoreModule from './modules/threshold-score/threshold-score.module';
import EnrolleeScoreModule from './modules/enrollee-score/enrollee-score.module';
import PrivilegedModule from './modules/privileged/privileged.module';
import EnroleeRewardModule from './modules/enrollee-reward/enrolee-reward.module';
import RoleModule from './modules/role/role.module';
import CourseModule from './modules/course/course.module';
import CourseLectorEntity from './modules/course-lector/course-lector.entity';
import SemesterModule from './modules/semester/semester.module';
import SemesterProgramModule from './modules/semester-program/semester-program.module';
import AddressModule from './modules/address/address.module';
import DescriptionModule from './modules/description/description.module';
import DictionaryModule from './modules/dictionary/dictionary.module';

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
