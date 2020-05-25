import { lensProp } from 'ramda';

export const favoritesLens = lensProp('favorites/plural');

export const favoriteLens = lensProp('favorites/single');