import { IAddress } from '../../constants/entities';

export enum Actions {
    SetUniversities = '@universities/SET_UNIVERSITIES',
    FetchUniversityDetails = '@universities/FETCH_UNIVERSITY_DETAILS',
    SetUniversityDetails = '@universities/SET_UNIVERSITY_DETAILS',
}

export interface ISetUniversityDetailsData extends IUniversityDetailsData {
    id: number;
}

export interface IUniversityData {
    id: number;
    avatarUrl: string;
    title: string;
    description: string;
    details?: IUniversityDetailsData;
}

export interface IUniversityDetailsData {
    adresses: IAddress[];
    faculties: number[];
    departments: number[];
    specialties: number[];
    positions: IPosition[];
    workers: number[];
}

export interface IPosition {
    id: number;
    title: string;
    universityId: number;
}

export interface IUniversitiesState {
    [universityId: number]: IUniversityData;
}

export interface IStateWithUniversities {
    universities: IUniversitiesState;
}