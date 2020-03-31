import { replace, concat, toLower, toUpper, compose, tail } from 'ramda';

export const toSnake = replace(
    /([A-Z])/g,
    compose(
        concat('_'),
        toLower,
    )
);

export const toCamel = replace(
    /(_[a-z])/g,
    compose(
        concat(''),
        tail,
        toUpper,
    )
);
