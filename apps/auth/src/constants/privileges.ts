import { PrivilegeType } from './entities';

export const objects = [
    'own-users',
    'all-users',
    'own-contacts',
    'all-contacts',
    'own-favorites',
    'own-roles',
    'own-privileges',
    'own-settings',
];

export const accessTypeToHTTPMethodMap = {
    [PrivilegeType.Read]: ['GET'],
    [PrivilegeType.Write]: ['POST', 'PUT', 'PATCH', 'DELETE'],
    [PrivilegeType.ReadWrite]: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
};