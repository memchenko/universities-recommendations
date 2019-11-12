export type Specialty = {
    id: string;
    name: string;
};

export type SpecialtyDescription = {
    specialtyId: Specialty['id'];
    value: string;
};