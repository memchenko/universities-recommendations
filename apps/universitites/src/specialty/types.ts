import DepartmentEntity from '../department/department.entity';
import CompetitionEntity from '../competition/competition.entity';
import DescriptionEntity from '../description/description.entity';

export interface ISpecialtyEntity {
    id: number;
    title: string;
    department: DepartmentEntity;
    competitions: CompetitionEntity[];
    description: DescriptionEntity;
}
