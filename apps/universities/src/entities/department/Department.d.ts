export type Department = {
    id: string;
    name: string;
};

export type DepartmentDescription = {
    departmentId: Department['id'];
    value: string;
};