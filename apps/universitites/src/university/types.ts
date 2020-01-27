import FacultyEntity from '../faculty/faculty.entity';
import DescriptionEntity from '../description/description.entity';

export interface IUniversityEntity {
    id: number;
    title: string;
    faculties: FacultyEntity[];
    description: DescriptionEntity;
}
