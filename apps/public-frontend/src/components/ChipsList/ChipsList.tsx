import React, { useCallback } from 'react';
import cn from 'classnames';

import { IChipsListProps } from './types';
import './ChipsList.scss';

export default function ChipsList(props: IChipsListProps) {
    const handleClick = useCallback((event) => {
        const option = event.target.dataset.value;
        props.onRemove(
            props.options
                .map(({ value }) => String(value))
                .filter(value => value !== option)
        );
    }, [props]);

    return (
        <ul className={ cn('chips-list', 'list-unstyled', 'mb-2') }>
            {
                props.options.map(({ value, label }) => (
                    <li
                        key={ value }
                        title={ `Удалить ${label}` }
                        className={ cn('chips-list__item', 'mr-1') }
                    >
                        <button
                            type="button"
                            className={ cn('chips-list__button', 'px-3', 'py-1') }
                            data-value={ value }
                            onClick={ handleClick }
                        >
                            { label }
                        </button>
                    </li>
                ))
            }
        </ul>
    );
}