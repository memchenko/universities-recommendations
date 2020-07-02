import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { IRecommendationPageProps } from './types';

import SearchInput from '../SearchInput';
import RecommendationsFilter from '../RecommendationsFilters';
import SearchResultsList from '../SearchResultsList';
import Pagination from '../Pagination';

export default function RecommendationsPage({ results }: IRecommendationPageProps) {
    return (
        <>
            <Container className="mb-4" fluid>
                <SearchInput onSubmit={ () => {} } />
            </Container>
            <Container fluid>
                <Row className="align-items-start">
                    <Col md={ 4 } style={{ position: 'sticky', top: 20 }}>
                        <RecommendationsFilter />
                    </Col>
                    <Col md={ 8 }>
                        <div className="mb-3 d-flex justify-content-end mr-3">
                            <Pagination
                                active={ 1 }
                                total={ 6 }
                                onChange={ console.log }
                            />
                        </div>
                        <SearchResultsList
                            data={ results }
                        />
                        <div className="mt-3 d-flex justify-content-end mr-3">
                            <Pagination
                                active={ 1 }
                                total={ 6 }
                                onChange={ console.log }
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
