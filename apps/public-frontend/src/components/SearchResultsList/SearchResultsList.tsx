import React from 'react';
import { ListGroup, Card, Row, Col, Image, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { ISearchResultsListProps } from './types';

import FavoriteButton from '../../containers/FavoriteButton';

export default function SearchResultsList(props: ISearchResultsListProps) {
    if (!props.data.length) {
        return (
            <Jumbotron className="text-center">
                <span className={
                    cn('h1', 'text-secondary', 'font-weight-bold')
                }>Ничего не найдено</span>
            </Jumbotron>
        );
    }

    const truncate = (text: string) => (
        text.length > 400 ? text.substr(0, 397).concat('...') : text
    );

    return (
        <ListGroup variant="flush">
            {
                props.data.map(item => (
                    <ListGroup.Item key={ `${item.entity}/${item.id}` }>
                        <Row>
                            <Col md="auto">
                                <Image
                                    src={ item.pic }
                                    width={ 150 }
                                    height={ 150 }
                                    rounded
                                />
                            </Col>
                            <Col>
                            <Card.Title className="d-flex justify-content-between">
                                <Link
                                    to={ `/${item.entity}/${item.id}` }
                                >{ item.heading }</Link>
                                <FavoriteButton
                                    id={ item.id }
                                    entity={ item.entity }
                                />
                            </Card.Title>
                            <Card.Text>{ truncate(item.description) }</Card.Text>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    );
}