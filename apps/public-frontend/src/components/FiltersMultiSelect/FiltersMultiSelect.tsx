import React, { useState, useCallback, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import MultiSelect from '../MultiSelect';
import ChipsList from '../ChipsList';

import { IFiltersMultiSelectProps } from './types';

export default function FiltersMultiSelect(props: IFiltersMultiSelectProps) {
    const [value, setValue] = useState([] as string[]);
    const handleChange = useCallback(setValue, []);

    useEffect(() => props.onChange(value), [props, value]);

    return (
        <>
            <Row className="align-items-center mb-2">
                <Col>{ props.label }</Col>
                <Col>
                    <MultiSelect
                        value={ value }
                        placeholder={ props.placeholder }
                        options={ props.options }
                        onChoose={ handleChange }
                    />
                </Col>
            </Row>
            {
                value.length
                    ? (
                        <Row className="mb-2">
                            <Col>
                                <ChipsList
                                    options={
                                        props.options.filter(
                                            item => value.includes(String(item.value))
                                        )
                                    }
                                    onRemove={ handleChange }
                                />
                            </Col>
                        </Row>
                    )
                    : null
            }
        </>
    );
}