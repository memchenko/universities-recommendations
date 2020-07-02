import { combineReducers } from 'redux';

import { reducers as departments } from '../entities/departments';
import { reducers as faculties } from '../entities/faculties';
import { reducers as favorites } from '../entities/favorites';
import { reducers as me } from '../entities/me';
import { reducers as network } from '../entities/network';
import { reducers as search } from '../entities/search';
import { reducers as specialties } from '../entities/specialties';
import { reducers as universities } from '../entities/universities';
import { reducers as users } from '../entities/users';

export default combineReducers({
    departments,
    faculties,
    favorites,
    me,
    network,
    search,
    specialties,
    universities,
    users,
});