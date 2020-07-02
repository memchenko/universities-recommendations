import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { IFavoriteButtonProps } from './types';
import './FavoriteButton.scss';

export default function FavoriteButton(props: IFavoriteButtonProps) {
    const handleClick = useCallback((event) => {
        props.onChange(event.target.dataset.value === 'true');
    }, [props]);

    return (
        <button
            data-value={ !props.checked }
            className="favorite-button"
            title={ props.checked ? 'Удалить из Избранного' : 'Добавить в Избранное' }
            onClick={ handleClick }
        >
            {
                !props.checked && (
                    <FontAwesomeIcon
                        className="favorite-button__icon"
                        icon={ faStar }
                        mask={ faStar }
                        transform={{ size: 9, y: 0.4 }}
                    />
                )
            }
            {
                props.checked && (
                    <FontAwesomeIcon
                        className="favorite-button__icon favorite-button__icon--active"
                        icon={ faStar }
                    />
                )
            }
        </button>
    );
}
