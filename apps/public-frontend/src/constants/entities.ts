export enum EntitiesTypes {
    University = 'university',
    Faculty = 'faculty',
    Department = 'department',
    Specialty = 'specialty',
}

export interface IAddress {
    title: string;
    lat: number;
    lon: number;
}