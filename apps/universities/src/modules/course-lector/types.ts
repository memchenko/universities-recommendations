import { ICourseEntity } from '../course/types';

export interface ICourseLectorEntity {
    userId: number;
    courses: ICourseEntity[];
}
