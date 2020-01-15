import DepartmentEntity from './department.entity';

export const DEPARTMENT_REPOSITORY = 'DEPARTMENT_REPOSITORY';

export default [
    {
        provide: DEPARTMENT_REPOSITORY,
        useValue: DepartmentEntity,
    }
]