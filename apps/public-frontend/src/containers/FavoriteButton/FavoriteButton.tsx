import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { IFavoriteButtonProps } from './types';

import {
    default as FavoriteButtonView,
} from '../../components/FavoriteButton';
import { useActions } from '../../utils/useActions';
import { isEntityFavorite, setFavorite } from '../../entities/favorites';
import { ActionCreator } from 'deox';

export default function FavoriteButton(props: IFavoriteButtonProps) {
    const checked = useSelector(isEntityFavorite(props.entity, props.id));
    const dispatchSetFavorite = useActions(
        setFavorite
    ) as ActionCreator<ReturnType<typeof setFavorite>>;
    const handleChange = useCallback((value: boolean) => {
        dispatchSetFavorite({
            entity: props.entity,
            id: props.id,
            checked: value,
        });
    }, [props, dispatchSetFavorite]);

    return <FavoriteButtonView checked={ checked } onChange={ handleChange } />;
}
