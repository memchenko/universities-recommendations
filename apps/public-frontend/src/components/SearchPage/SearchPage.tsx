import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SearchInput from '../SearchInput';
import SearchFilters from '../SearchFilters';

export default function SearchPage() {
    return (
        <>
            <Container className="mb-4" fluid>
                <SearchInput onSubmit={ () => {} } />
            </Container>
            <Container fluid>
                <Row>
                    <Col md={ 4 }>
                        <SearchFilters />
                    </Col>
                    <Col md="auto"></Col>
                </Row>
            </Container>
        </>
    );
}