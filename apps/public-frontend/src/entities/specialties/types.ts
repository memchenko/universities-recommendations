import { IAddress } from '../../constants/entities';

export enum Actions {
    SetSpecialties = '@specialties/SET_SPECIALTIES',
    FetchSpecialtyDetails = '@specialties/FETCH_SPECIALTY_DETAILS',
    SetSpecialtyDetails = '@specialties/SET_SPECIALTY_DETAILS',
}

export interface ISpecialtyData {
    id: number;
    avatarUrl: string;
    title: string;
    description: string;
    price: number;
    duration: number;
    competition: ICompetition;
    details?: ISpecialtyDetails;
}

export interface ICompetition {
    slots: number;
    enrollees: number;
}

export interface ISpecialtyDetails {
    addresses: IAddress[];
    universityId: number;
    facultyId: number;
    departmentId: number;
    workers: number[];
    enrollees: number[];
    semesters: ISemester; 
}

export interface ISemester {
    start: Date;
    end: Date;
}

export interface ISetSpecialtyDetailsData extends ISpecialtyDetails {
    id: number;
}

export interface ISpecialtiesState {
    [speicialtyId: number]: ISpecialtyData;
}

export interface IStateWithSpecialties {
    specialties: ISpecialtiesState;
}