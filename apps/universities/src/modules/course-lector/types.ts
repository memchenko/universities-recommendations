import { ICourseEntity } from '../course/types';

export interface ICourseLectorEntity {
    id: number;
    userId: number;
    courses: ICourseEntity[];
}
