import { PrivilegeType } from './entities';

export const enum ObjectsOfPrivilege {
    OwnUser = 'own-user',
    AllUsers = 'all-users',
    OwnContacts = 'own-contacts',
    AllContacts = 'all-contacts',
    OwnFavorites = 'own-favorites',
    OwnRoles = 'own-roles',
    OwnPrivileges = 'own-privileges',
    OwnSettings = 'own-settings',
}

export const objectOfPrivilegeToRouteMap = {
    [ObjectsOfPrivilege.OwnUser]: [
        '/user/:id',
    ],
    [ObjectsOfPrivilege.AllUsers]: [
        '/user',
    ],
    [ObjectsOfPrivilege.OwnContacts]: [
        '/user/:id/contact',
        '/user/:id/contact/:contactId',
    ],
    [ObjectsOfPrivilege.AllContacts]: [
        '/contact',
    ],
    [ObjectsOfPrivilege.OwnFavorites]: [
        '/user/:id/favorite',
        '/user/:id/favorite/:favoriteId',
    ],
    [ObjectsOfPrivilege.OwnRoles]: [
        '/user/:id/role',
        '/user/:id/role/:roleId',
    ],
    [ObjectsOfPrivilege.OwnPrivileges]: [
        '/user/:id/privilege',
        '/user/:id/privilege/:privilegeId',
    ],
    [ObjectsOfPrivilege.OwnSettings]: [
        '/user/:id/setting',
        '/user/:id/setting/:settingId',
    ],
};

export const accessTypeToHTTPMethodMap = {
    [PrivilegeType.Read]: ['GET'],
    [PrivilegeType.Write]: ['POST', 'PUT', 'PATCH', 'DELETE'],
    [PrivilegeType.ReadWrite]: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
};