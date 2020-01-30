import { ISemesterEntity } from '../semester/types';
import { ICourseEntity } from '../course/types';

export interface ISemesterProgramEntity {
    semester: ISemesterEntity;
    courses: ICourseEntity[];
}
