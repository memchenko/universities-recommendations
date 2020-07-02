import { view, lensPath, compose } from 'ramda';

import { EntitiesTypes } from '../../constants/entities';

export const isEntityFavorite = (
    entity: EntitiesTypes,
    id: number,
) => compose(
    Boolean,
    view(lensPath(['favorites', entity, id]))
);