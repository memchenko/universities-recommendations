import React, { useState, useCallback, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import { IFiltersLocationInputProps } from './types';

import LocationInput from '../../containers/LocationInput';
import ChipsList from '../ChipsList';

export default function FiltersLocationInput(props: IFiltersLocationInputProps) {
    const [value, setValue] = useState([] as string[]);
    const handleRemove = useCallback((list: string[]) => {
        setValue(list);
    }, []);
    const handleLocationChange = useCallback((location: string) => {
        if (value.includes(location)) {
            return;
        }

        setValue(value.concat(location));
    }, [value]);

    useEffect(() => {
        props.onChange(value);
    }, [value, props]);

    return (
        <>
            <Row>
                <Col>{ props.label }</Col>
            </Row>
            <Row className="align-items-center mb-2">
                <Col>
                    <LocationInput
                        lens={ props.lens }
                        onChange={ handleLocationChange }
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
                                        value.map(item => ({ value: item, label: item }))
                                    }
                                    onRemove={ handleRemove }
                                />
                            </Col>
                        </Row>
                    )
                    : null
            }
        </>
    );
}