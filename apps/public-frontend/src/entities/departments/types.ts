import { IAddress } from '../../constants/entities';

export enum Actions {
    SetDepartments = '@departments/SET_DEPARTMENTS',
    FetchDepartmentDetails = '@departments/FETCH_DEPARTMENT_DETAILS',
    SetDepartmentDetails = '@departments/SET_DEPARTMENT_DETAILS',
}

export interface IDepartmentData {
    id: number;
    avatarUrl: string;
    title: string;
    description: string;
    details?: IDepartmentDetails;
}

export interface IDepartmentDetails {
    addresses: IAddress[];
    universityId: number;
    facultyId: number;
    specialties: number[];
    workers: number[];
}

export interface ISetDepartmentDetailsData extends IDepartmentDetails {
    id: number;
}

export interface IDepartmentsState {
    [departmentId: number]: IDepartmentData;
}

export interface IStateWithDepartments {
    departments: IDepartmentsState;
}