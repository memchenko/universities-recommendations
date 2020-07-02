import React, { useState, useCallback } from 'react';
import {
    InputGroup,
    FormControl,
    DropdownButton,
    Dropdown,
    Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { IDictionaryValueInputProps } from './types';
import './DictionaryValueInput.scss';

export default function DictionaryValueInput(props: IDictionaryValueInputProps) {
    const [key, setKey] = useState(props.options[0]);
    const [value, setValue] = useState('');
    const handleSelect = useCallback((eventKey: string) => {
        setKey(
            props.options.find(({ value }) => String(value) === eventKey)
            || props.options[0]
        );
    }, [props]);
    const handleInput = useCallback((event) => {
        const input = event.target.value;

        if (props.validation) {
            if (props.validation.test(input)) {
                setValue(input);
            }
        } else {
            setValue(input);
        }
    }, [props]);
    const handleAdd = useCallback(() => {
        if (
            (!props.allowEmptyValue && value === '')
            || (props.validation && !props.validation.test(value))
        ) {
            return;
        }

        props.onAdd({ key: key.value, value });
        setValue('');
        setKey(props.options[0]);
    }, [props, key, value]);

    return (
        <InputGroup className="dictionary-value-input">
            <DropdownButton
                as={ InputGroup.Prepend }
                id={ props.id }
                title={ key.label }
                variant="outline-secondary"
                className="dictionary-value-input__dropdown"
            >
                {
                    props.options.map(({ value, label }) => (
                        <Dropdown.Item
                            key={ value }
                            eventKey={ String(value) }
                            onSelect={ handleSelect }
                        >
                            <span>{ label }</span>
                        </Dropdown.Item>
                    ))
                }
            </DropdownButton>
            <FormControl
                type="text"
                value={ value }
                placeholder={ props.placeholder }
                onChange={ handleInput }
            />
            <InputGroup.Append>
                <Button type="button" title="Добавить" variant="success">
                    <FontAwesomeIcon icon={ faPlus } onClick={ handleAdd } />
                </Button>
            </InputGroup.Append>
        </InputGroup>
    );
}