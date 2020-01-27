import UniversityEntity from '../university/university.entity';
import DepartmentEntity from '../department/department.entity';
import DescriptionEntity from '../description/description.entity';

export interface IFacultyEntity {
    id: number;
    title: string;
    university: UniversityEntity;
    departments: DepartmentEntity[];
    description: DescriptionEntity;
}
