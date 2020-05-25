import { IAddress } from '../../constants/entities';

export enum Actions {
    SetFaculties = '@faculties/SET_FACULTIES',
    FetchFacultyDetails = '@faculties/FETCH_FACULTY_DETAILS',
    SetFacultyDetails = '@faculties/SET_FACULTY_DETAILS',
}

export interface ISetFacultyDetailsData extends IFacultyDetailsData {
    id: number;
}

export interface IFacultyData {
    id: number;
    avatarUrl: string;
    title: string;
    description: string;
    details?: IFacultyDetailsData;
}

export interface IFacultyDetailsData {
    adresses: IAddress[];
    universityId: number;
    departments: number[];
    specialties: number[];
    workers: number[];
}

export interface IFacultiesState {
    [facultyId: number]: IFacultyData;
}

export interface IStateWithFaculties {
    faculties: IFacultiesState;
}