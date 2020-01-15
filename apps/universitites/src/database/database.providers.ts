import { Sequelize } from 'sequelize-typescript';

import Competition from '../competition/competition.entity';
import Department from '../department/department.entity';
import DepartmentDescription from '../department/description/department-description.entity';
import Faculty from '../faculty/faculty.entity';
import FacultyDescription from '../faculty/description/faculty-description.entity';
import Geolocation from '../geolocation/geolocation.entity';
import Specialty from '../specialty/specialty.entity';
import SpecialtyDescription from '../specialty/description/specialty-description.entity';
import University from '../university/university.entity';
import UniversityDescription from '../university/description/university-description.entity';

export const DATABASE = 'DATABASE';

export default [
    {
        provide: DATABASE,
        useFactory: async () => {
            const sequelize = await new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'admin',
                password: 'password',
                database: 'universtities',
              });

              await sequelize.addModels([
                  Competition,
                  Department,
                  DepartmentDescription,
                  Faculty,
                  FacultyDescription,
                  Geolocation,
                  Specialty,
                  SpecialtyDescription,
                  University,
                  UniversityDescription,
              ]);


              return sequelize;
        },
    }
]