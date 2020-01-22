import UniversityEntity from '../university/university.entity';
import DepartmentEntity from '../department/department.entity';

export interface IFacultyEntity {
    id: number;
    title: string;
    university: UniversityEntity;
    departments: DepartmentEntity[];
}
