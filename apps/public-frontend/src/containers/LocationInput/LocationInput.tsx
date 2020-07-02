import React from 'react';
import { view, compose } from 'ramda';
import { useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { ActionCreator } from 'deox';

import { ILocationInputProps } from './types';

import FetchInput from '../../components/FetchInput';
import { useActions } from '../../utils/useActions';
import { fetchLocations, ILocationsResponse } from '../../entities/search';
import { RequestStatus, IRequestData, requestsLens } from '../../entities/network';

const DEBOUNCE = 400;

export default function LocationInputContainer(props: ILocationInputProps) {
    const request: IRequestData<ILocationsResponse> = useSelector(
        compose(
            view(props.lens),
            view(requestsLens),
        ),
    );
    const dispatchFetchLocations = useActions(
        fetchLocations
    ) as ActionCreator<ReturnType<typeof fetchLocations>>;
    const [debouncedDispatchFetchLocations] = useDebouncedCallback((query: string) => {
        dispatchFetchLocations({ query, key: props.lens });
    }, DEBOUNCE);
    const isRequestNotEmpty = request && request.data && request.data.suggestions;
    const isLoading = request && request.status === RequestStatus.Pending;

    return (
        <FetchInput
            placeholder="Москва"
            isLoading={ isLoading }
            options={
                isRequestNotEmpty
                    ? (request.data as ILocationsResponse)
                        .suggestions.map(({ value }) => value)
                    : []
            }
            onChange={ debouncedDispatchFetchLocations }
            onChoose={ props.onChange }
        />
    );
}