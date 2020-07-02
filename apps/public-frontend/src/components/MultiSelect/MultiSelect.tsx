import React, { useState, useCallback, useRef } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import cn from 'classnames';

import { IMultiSelectProps } from './types';

import './Multiselect.scss';

export default function MultiSelect({ placeholder, options, onChoose, value }: IMultiSelectProps) {
    const input = useRef(null);
    const [filter, setFilter] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isKeepOpen, setIsKeepOpen] = useState(false);
    const handleChange = useCallback(event => setFilter(event.target.value), []);
    const handleFocus = useCallback(() => setIsOpen(true), []);
    const handleBlur = useCallback(() => {
        if (!isKeepOpen) {
            setIsOpen(false);
        }
    }, [isKeepOpen]);
    const handleMouseOver = useCallback(() => setIsKeepOpen(true), []);
    const handleMouseOut = useCallback(() => {
        setIsKeepOpen(false);
        
        (input.current as unknown as HTMLInputElement).focus();
    }, [input]);
    const handleOptionClick = useCallback((event) => {
        const option = event.target.dataset.value;
        onChoose(
            value.includes(option)
                ? value.filter(item => item === option)
                : value.concat(option)
        );
    }, [onChoose, value]);

    return (
        <div className="select">
            <InputGroup>
                <FormControl
                    ref={ input }
                    type="text"
                    placeholder={ placeholder }
                    onChange={ handleChange }
                    value={ filter }
                    onFocus={ handleFocus }
                    onBlur={ handleBlur }
                />
            </InputGroup>
            <div
                className={ cn('select__menu', { 'select__menu--open': isOpen }) }
                onMouseOver={ handleMouseOver }
                onMouseOut={ handleMouseOut }
            >
                <ul className={ cn('select__list', 'list-unstyled') }>
                    { options
                        .filter(({ label }) => label.toLowerCase().startsWith(filter.toLowerCase()))
                        .map(({ value: option, label }) => (
                            <li
                                key={ option }
                                data-value={ option }
                                onClick={ handleOptionClick }
                                className={ cn('select__item', {
                                    'select__item--chosen': value.includes(String(option))
                                }) }
                            >{ label }</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}