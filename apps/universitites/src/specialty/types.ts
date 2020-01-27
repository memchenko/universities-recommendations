import DepartmentEntity from '../department/department.entity';
import CompetitionEntity from '../competition/competition.entity';
import DescriptionEntity from '../description/description.entity';
import TeachingTypeEntity from '~/static-tables/teaching-type.entity';
import PaymentTypeEntity from '~/static-tables/payment-type.entity';

export interface ISpecialtyEntity {
    id: number;
    title: string;
    department: DepartmentEntity;
    competitions: CompetitionEntity[];
    description: DescriptionEntity;
    teachingType: TeachingTypeEntity;
    paymentType: PaymentTypeEntity;
    price: number;
    duration: number;
}
