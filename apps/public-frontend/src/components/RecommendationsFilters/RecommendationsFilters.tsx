import React, { useState, useCallback, useMemo } from 'react';
import { Card, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import { lensPath } from 'ramda';

import { IRecommendationsFiltersProps } from './types';
import './RecommendationsFilters.scss';

import FiltersMultiSelect from '../FiltersMultiSelect';
import FiltersDictionaryValueInput from '../FiltersDictionaryValueInput';
import Select from '../Select';
import FiltersLocationInput from '../FiltersLocationInput';

export default function RecommendationsFilters(props: IRecommendationsFiltersProps) {
    const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
    const handleAdditionalClick = useCallback(() => {
        setIsAdditionalOpen(!isAdditionalOpen);
    }, [isAdditionalOpen]);
    const [includeLocations, excludeLocations] = useMemo(() => ([
        lensPath(['search', 'includeLocations']),
        lensPath(['search', 'excludeLocations']),
    ]), []);
    const domainsOptions = [
        { value: 0, label: 'Музыка' },
        { value: 1, label: 'Торговля' },
        { value: 2, label: 'Строительство' },
    ];
    const sciencesOptions = [
        { value: 0, label: 'Физика' },
        { value: 1, label: 'Химия' },
        { value: 2, label: 'Математика' },
    ];
    const educationFormat = [
        { value: 0, label: 'Очная' },
        { value: 1, label: 'Заочная' },
        { value: 2, label: 'Очно-заочная' },
        { value: 3, label: 'Вечерняя' },
    ];

    return (
        <Form>
            <Card>
                <Card.Header>Фильтры</Card.Header>
                <Card.Body>
                    <FiltersDictionaryValueInput
                        id="scores"
                        label="Баллы ЕГЭ"
                        placeholder="100"
                        validation={ /^(100|[1-9]|[1-9][0-9]|^)$/ }
                        onChange={ console.log }
                        options={ sciencesOptions }
                    />
                    <Row className="align-items-center mb-2">
                        <Col>Цена обучения (в год, руб)</Col>
                        <Col>
                            <InputGroup>
                                <Form.Control type="text" placeholder="от" />
                                <Form.Control type="text" placeholder="до" />
                            </InputGroup>
                        </Col>
                    </Row>
                    <FiltersMultiSelect
                        label="Форма обучения"
                        placeholder="Например, очно"
                        onChange={ console.log }
                        options={ educationFormat }
                    />
                </Card.Body>
                <Card.Header
                    as="button"
                    type="button"
                    title={ isAdditionalOpen ? 'Свернуть' : 'Раскрыть' }
                    className={ cn('search-filters__additional', {
                        'search-filters__additional--closed': !isAdditionalOpen,
                    }) }
                    onClick={ handleAdditionalClick }
                >
                    <Row className="justify-content-between">
                        <Col>Дополнительные фильтры</Col>
                        <Col md="auto">
                            <FontAwesomeIcon icon={ isAdditionalOpen ? faAngleUp : faAngleDown } />
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body
                    className={ cn('search-filters__additional-menu', {
                        'search-filters__additional-menu--open': isAdditionalOpen,
                    }) }
                >
                    <FiltersLocationInput
                        lens={ includeLocations }
                        label="Искать в локациях"
                        onChange={ console.log }
                    />
                    <FiltersLocationInput
                        lens={ excludeLocations }
                        label="Не искать в локациях"
                        onChange={ console.log }
                    />
                    <FiltersMultiSelect
                        label="Сфера деятельности"
                        placeholder="Например, музыка"
                        onChange={ console.log }
                        options={ domainsOptions } 
                    />
                    <FiltersMultiSelect
                        label="Сфера науки"
                        placeholder="Например, физика"
                        onChange={ console.log }
                        options={ sciencesOptions }
                    />
                    <Row className="align-items-center mb-2">
                        <Col>С общежитием</Col>
                        <Col>
                            <Select
                                id="dormitory"
                                options={
                                    [
                                        { value: 0, label: 'Не важно', },
                                        { value: 1, label: 'Да', },
                                        { value: 2, label: 'Нет', }
                                    ]
                                }
                                onChange={ console.log }
                            />
                        </Col>
                    </Row>
                    <Row className="align-items-center mb-2">
                        <Col>Доп. испытания</Col>
                        <Col>
                            <Select
                                id="tests"
                                options={
                                    [
                                        { value: 0, label: 'Не важно', },
                                        { value: 1, label: 'Да', },
                                        { value: 2, label: 'Нет', }
                                    ]
                                }
                                onChange={ console.log }
                            />
                        </Col>
                    </Row>
                    <Row className="align-items-center mb-2">
                        <Col>Военная кафедра</Col>
                        <Col>
                            <Select
                                id="military-cathedra"
                                options={
                                    [
                                        { value: 0, label: 'Не важно', },
                                        { value: 1, label: 'Да', },
                                        { value: 2, label: 'Нет', }
                                    ]
                                }
                                onChange={ console.log }
                            />
                        </Col>
                    </Row>
                    <Row className="align-items-center mb-2">
                        <Col>Государственный ВУЗ</Col>
                        <Col>
                            <Select
                                id="is-state-university"
                                options={
                                    [
                                        { value: 0, label: 'Не важно', },
                                        { value: 1, label: 'Да', },
                                        { value: 2, label: 'Нет', }
                                    ]
                                }
                                onChange={ console.log }
                            />
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col>Расстояние от дома</Col>
                        <Col>
                            <Select
                                id="is-far-from-home"
                                options={
                                    [
                                        { value: 0, label: 'Не важно', },
                                        { value: 1, label: 'Поближе', },
                                        { value: 2, label: 'Подальше', },
                                    ]
                                }
                                onChange={ console.log }
                            />
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end">
                    <Button type="submit" size="lg">Искать</Button>
                </Card.Footer>
            </Card>
        </Form>
    );
}
