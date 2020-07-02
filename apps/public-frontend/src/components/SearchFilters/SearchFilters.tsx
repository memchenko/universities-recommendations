import React, { useMemo } from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { lensPath } from 'ramda';

import { ISearchFiltersProps } from './types';
import './SearchFilters.scss';

import FiltersMultiSelect from '../FiltersMultiSelect';
import FiltersLocationInput from '../FiltersLocationInput';

export default function SearchFilters(props: ISearchFiltersProps) {
    const [includeLocations, excludeLocations] = useMemo(() => ([
        lensPath(['search', 'includeLocations']),
        lensPath(['search', 'excludeLocations']),
    ]), []);
    const entitiesOptions = [
        { value: 0, label: 'ВУЗы' },
        { value: 1, label: 'Факультеты' },
        { value: 2, label: 'Направления' },
        { value: 3, label: 'Специальности' },
    ];

    return (
        <Form>
            <Card>
                <Card.Header>Фильтры</Card.Header>
                <Card.Body>
                    <Row className="align-items-center mb-4">
                        <Col>Искать только</Col>
                        <Col>
                            <Form.Check id="title" type="checkbox" label="В названии" />
                        </Col>
                        <Col>
                            <Form.Check id="description" type="checkbox" label="В описании" />
                        </Col>
                    </Row>
                    <FiltersMultiSelect
                        label="В поиск включить"
                        placeholder="Всё"
                        options={ entitiesOptions }
                        onChange={ console.log }
                    />
                    <FiltersLocationInput
                        label="Искать в локациях"
                        lens={ includeLocations }
                        onChange={ console.log }
                    />
                    <FiltersLocationInput
                        label="Не искать в локациях"
                        lens={ excludeLocations }
                        onChange={ console.log }
                    />
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end">
                    <Button type="submit" size="lg">Искать</Button>
                </Card.Footer>
            </Card>
        </Form>
    );
}
