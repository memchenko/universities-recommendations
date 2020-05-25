import { IQueryStringData } from '../network';

export enum Actions {
    FetchUsers = '@users/FETCH_USERS',
    SetUsers = '@users/SET_USERS',
}

export enum ContactTypes {
    Phone = 'phone',
    Email = 'email',
}

export enum UserTypes {
    Enrollee = 'enrollee',
    UniversityWorker = 'university-worker',
}

export enum ContactVerifiedStatuses {
    NotVerified,
    PendingVerification,
    Verified,
}

export interface IContact {
    id: number;
    value: string;
    contactType: ContactTypes;
    verifiedStatus: ContactVerifiedStatuses;
}

export interface IUser {
    id: number;
    userType: UserTypes;
    firstName: string;
    lastName: string;
    middleName: string | null;
    avatar: string | null;
    contacts: IContact[];
}

export interface IUniversityWorker extends IUser {
    universityId: number;
    positions: number[];
}

export interface IFacultyWorker extends IUser {
    facultyId: number;
    universityId: number;
    positions: number[];
}

export interface IDepartmentWorker extends IUser {
    departmentId: number;
    universityId: number;
    positions: number[];
}

export interface ISpecialtyWorker extends IUser {
    specialtyId: number;
    universityId: number;
    positions: number[];
}

export interface IUserFilters extends IQueryStringData {
    ids?: string;
    page?: number;
    userType?: UserTypes;
    universityId?: number;
    facultyId?: number;
    departmentId?: number;
    specialtyId?: number;
}

export interface IUsersState {
    [userId: string]: IUser;
}

export interface IStateWithUsers {
    users: IUsersState;
}
