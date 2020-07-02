import React from 'react';
import { Card, Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { ISearchInputProps } from './types';

export default function SearchInput(props: ISearchInputProps) {
    return (
        <Card>
            <Card.Body>
                <Form onSubmit={ props.onSubmit }>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={ faSearch } />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" placeholder="МГУ им. Ломоносова" />
                        <InputGroup.Append>
                            <Button type="submit">Искать</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </Card.Body>
        </Card>
    );
}