export interface IUniversityModel {
    id: number;
    name: string;
}

export interface IUniversityDescriptionModel {
    universityId: number;
    university: IUniversityModel;
    value: string;
}