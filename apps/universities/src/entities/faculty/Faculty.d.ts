export type Faculty = {
    id: string;
    name: string;
};

export type FacultyDescription = {
    facultyId: Faculty['id'];
    value: string;
};