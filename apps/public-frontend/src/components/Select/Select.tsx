import React, { useState, useCallback } from 'react';
import { Dropdown } from 'react-bootstrap';

import { ISelectProps } from './types';
import './Select.scss';

export default function Select(props: ISelectProps) {
    const [value, setValue] = useState(props.options[0].value);
    const handleClick = useCallback((event) => {
        const { value } = event.target.dataset;

        setValue(value);
        props.onChange(value);
    }, [props]);
    const chosenOption =
        props.options.find(
            ({ value: option }) => String(option) === String(value)
        ) || props.options[0];

    return (
        <Dropdown className="select">
            <Dropdown.Toggle
                id={ props.id }
                variant="outline-secondary"
            >{ chosenOption.label }</Dropdown.Toggle>
            <Dropdown.Menu>
                {
                    props.options.map(({ value: option, label }) => (
                        <Dropdown.Item
                            key={ option }
                            data-value={ option }
                            onClick={ handleClick }
                        >{ label }</Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}