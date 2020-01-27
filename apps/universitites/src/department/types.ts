import FacultyEntity from '../faculty/faculty.entity';
import SpecialtyEntity from '../specialty/specialty.entity';
import DescriptionEntity from '../description/description.entity';

export interface IDepartmentEntity {
    id: number;
    title: string;
    faculty: FacultyEntity;
    specialties: SpecialtyEntity[];
    description: DescriptionEntity;
}
