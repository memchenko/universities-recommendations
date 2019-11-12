export type University = {
    id: string;
    name: string;
};

export type UniversityDescription = {
    universityId: University['id'];
    value: string;
};