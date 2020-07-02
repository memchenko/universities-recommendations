import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col } from 'react-bootstrap';

import { IFiltersDictionaryValueInputProps } from './types';

import DictionaryValueInput from '../DictionaryValueInput';
import ChipsList from '../ChipsList';

export default function FiltersDictionaryValueInputProps(
    props: IFiltersDictionaryValueInputProps
) {
    const [value, setValue] = useState([] as { key: string; value: string; }[]);
    const handleAdd = useCallback((payload) => {
        const override = value.find(({ key }) => payload.key === key);

        if (override) {
            const index = value.indexOf(override);
            setValue(
                value
                    .slice(0, index)
                    .concat(payload)
                    .concat(value.slice(index + 1))
            );
        } else {
            setValue(value.concat(payload));
        }
    }, [value]);
    const handleRemove = useCallback((keys) => {
        setValue(value.filter(({ key }) => keys.includes(String(key))));
    }, [value]);
    const chipsListOptions = value.map(({ key, value }) => {
        const option = props.options.find(({ value: optionKey }) => optionKey === key);

        return {
            value: key,
            label: option ? `${option.label.slice(0, 3)}.: ${value}` : 'Ошибка',
        };
    });

    useEffect(() => {
        props.onChange(value);
    }, [value, props]);

    return (
        <>
            <Row className="align-items-center mb-2">
                <Col>{ props.label }</Col>
                <Col>
                    <DictionaryValueInput
                        id={ props.id }
                        options={ props.options }
                        validation={ props.validation }
                        placeholder={ props.placeholder }
                        onAdd={ handleAdd }
                    />
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <ChipsList
                        options={ chipsListOptions }
                        onRemove={ handleRemove }
                    />
                </Col>
            </Row>
        </>
    );
}
