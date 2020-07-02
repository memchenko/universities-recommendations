import React, { useCallback } from 'react';
import { Pagination as BPagination } from 'react-bootstrap';

import { IPaginationProps } from './types';

export default function Pagination(props: IPaginationProps) {
    const handleClick = useCallback((event) => {
        props.onChange(Number(event.target.dataset.value));
    }, [props]);
    
    if (props.total <= 5) {
        return (
            <BPagination>
                {
                    Array.from({ length: props.total }, (_, index) => (
                        <BPagination.Item
                            key={ index }
                            data-value={ index + 1 }
                            active={ (index + 1) === props.active }
                            onClick={ handleClick }
                        >{ index + 1 }</BPagination.Item>
                    ))
                }
            </BPagination>
        );
    }

    if (props.active >= props.total - 2) {
        return (
            <BPagination>
                <BPagination.First data-value={ 1 } onClick={ handleClick } />
                <BPagination.Prev data-value={ props.active - 1 } onClick={ handleClick } />
                <BPagination.Ellipsis data-value={ props.total - 4 } onClick={ handleClick } />
                {
                    Array.from({ length: 3 }, (_, index) => (
                        <BPagination.Item
                            key={ index }
                            data-value={ props.active - 1 + index }
                            active={ (props.active - 1 + index) === props.active }
                            onClick={ handleClick }
                        >{ props.active - 1 + index }</BPagination.Item>
                    ))
                }
            </BPagination>
        );
    }

    if (props.active <= 2) {
        return (
            <BPagination>
                {
                    Array.from({ length: 3 }, (_, index) => (
                        <BPagination.Item
                            key={ index }
                            data-value={ index + 1 }
                            active={ (index + 1) === props.active }
                            onClick={ handleClick }
                        >{ index + 1 }</BPagination.Item>
                    ))
                }
                <BPagination.Ellipsis data-value={ 4 } onClick={ handleClick } />
                <BPagination.Next data-value={ props.active + 1 } onClick={ handleClick } />
                <BPagination.Last data-value={ props.total } onClick={ handleClick } />
            </BPagination>
        );
    }

    return (
        <BPagination>
            <BPagination.First data-value={ 1 } onClick={ handleClick } />
            <BPagination.Prev data-value={ props.active - 1 } onClick={ handleClick } />
            <BPagination.Ellipsis data-value={ props.active - 2 } onClick={ handleClick } />
            {
                Array.from({ length: 3 }, (_, index) => (
                    <BPagination.Item
                        key={ index }
                        data-value={ props.active - 1 + index }
                        active={ (props.active - 1 + index) === props.active }
                        onClick={ handleClick }
                    >{ props.active - 1 + index }</BPagination.Item>
                ))
            }
            <BPagination.Ellipsis data-value={ props.active + 2 } onClick={ handleClick } />
            <BPagination.Next data-value={ props.active + 1 } onClick={ handleClick } />
            <BPagination.Last data-value={ props.total } onClick={ handleClick } />
        </BPagination>
    );
}