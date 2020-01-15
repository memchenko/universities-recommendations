import DepartmentDescriptionEntity from './department-description.entity';

export const DEPARTMENT_DESCRIPTION_REPOSITORY =
    'DEPARTMENT_DESCRIPTION_REPOSITORY';

export default [
    {
        provide: DEPARTMENT_DESCRIPTION_REPOSITORY,
        useValue: DepartmentDescriptionEntity,
    }
]