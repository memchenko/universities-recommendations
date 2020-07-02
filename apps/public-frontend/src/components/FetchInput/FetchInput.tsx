import React, { useState, useCallback } from 'react';
import { FormControl } from 'react-bootstrap';
import cn from 'classnames';

import { IFetchInputProps } from './types';
import './FetchInput.scss';

export default function FetchInput(props: IFetchInputProps) {
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isKeepOpen, setIsKeepOpen] = useState(false);
    const handleChange = useCallback((event) => {
        const { value } = event.target;

        setValue(value);
        props.onChange(value);
    }, [props]);
    const handleFocus = useCallback(() => setIsOpen(true), []);
    const handleBlur = useCallback(() => {
        if (!isKeepOpen) {
            setIsOpen(false);
        }
    }, [isKeepOpen]);
    const handleMouseOver = useCallback(() => {
        setIsKeepOpen(true);
    }, []);
    const handleMouseOut = useCallback(() => {
        setIsKeepOpen(false);
    }, []);
    const handleOptionClick = useCallback((event) => {
        const { value } = event.target.dataset;
        
        setValue(value);
        setIsOpen(false);
        setIsKeepOpen(false);
        props.onChoose(value);
    }, [props]);
    const highlightRegExp = new RegExp(`(?<!>)${value}(?!<)`, 'i');
    const highlightValue = (str: string) => {
        let res = str;
        let entry = res.match(highlightRegExp);

        while (entry !== null) {
            res = res.replace(
                highlightRegExp,
                `<span class="text-primary">${entry[0]}</span>`
            );
            entry = res.match(highlightRegExp);
        }
        
        return res;
    };

    return (
        <div className={ cn('fetch-input', {
            'fetch-input--loading': props.isLoading,
        }) }>
            <FormControl
                type="text"
                placeholder={ props.placeholder }
                value={ value }
                onChange={ handleChange }
                onFocus={ handleFocus }
                onBlur={ handleBlur }
            />
            <div
                className={ cn('fetch-input__menu', {
                    'fetch-input__menu--open': isOpen && props.options.length,
                }) }
                onMouseOver={ handleMouseOver }
                onMouseOut={ handleMouseOut }
            >
                <ul className={ cn('fetch-input__list', 'list-unstyled') }>
                    {
                        props.options.length
                            ? props.options.map(suggestion => (
                                <li
                                    key={ suggestion }
                                    data-value={ suggestion }
                                    onClick={ handleOptionClick }
                                    dangerouslySetInnerHTML={{ __html: highlightValue(suggestion) }}
                                    className={ cn('fetch-input__item', {
                                        'fetch-input__item--chosen': suggestion === value, 
                                    }) }
                                ></li>
                            ))
                            : null
                    }
                </ul>
            </div>
        </div>
    );
}
