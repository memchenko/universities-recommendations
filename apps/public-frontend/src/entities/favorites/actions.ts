import { createActionCreator } from 'deox';

import {
    Actions,
    ISetFavoriteArgData,
} from './types';

export const setFavorite = createActionCreator(
    Actions.SetFavorite,
    resolve => (data: ISetFavoriteArgData) => resolve(data)
);
