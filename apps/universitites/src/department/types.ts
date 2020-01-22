import FacultyEntity from '../faculty/faculty.entity';
import SpecialtyEntity from '../specialty/specialty.entity';

export interface IDepartmentEntity {
    id: number;
    title: string;
    faculty: FacultyEntity;
    specialties: SpecialtyEntity[];
}
