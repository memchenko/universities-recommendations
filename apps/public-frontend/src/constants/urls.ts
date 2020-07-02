export enum Routes {
    Root = '/',
    Search = '/search',
    Recommendations = '/recommendations',
    University = '/university',
    Faculty = '/faculty',
    Department = '/department',
    Specialty = '/specialty',
    Account = '/account',
    Auth = '/auth',
    Registration = '/registration',
    Favorite = '/favorite',
}

export const BASE_URL = 'http://localhost:3000';
export const API = '/api/0.0.1';
export enum Paths {
    Token = '/token',
    Users = '/user',
    Settings = '/settings',
    Contacts = '/contacts',
    Name = '/name',
    Avatar = '/avatar',
    Password = '/password',
    Search = '/search',
    Locations = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
    Recommendations = '/recommendations',
    Favorites = '/favorites',
    UniversityDetails = '/university/:id/details',
    FacultyDetails = '/faculty/:id/details',
    DepartmentDetails = '/department/:id/details',
    SpecialtyDetails = '/specialty/:id/details',
};