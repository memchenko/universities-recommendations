import { createReducer } from 'deox';
import { compose, clone, view, ifElse, isNil, identity, always, over } from 'ramda';

import {
    setRequest,
    setToken,
} from './actions';
import { createEmptyRequest } from './utils';
import { INetworkState, IRequestData } from './types';

const initialState: INetworkState = {
    accessToken: '',
    refreshToken: '',
    requests: {},
};

export default createReducer(initialState, handle => ([
    handle(setRequest, (state, { payload: { key, status, data } }) => {
        const request = compose<
            INetworkState,
            IRequestData | undefined,
            IRequestData,
            IRequestData
        >(
            clone,
            ifElse(
                isNil,
                identity,
                always(createEmptyRequest()),
            ),
            view<INetworkState, IRequestData>(key)
        )(state);
        request.status = status;
        request.data = data;
    
        return over(key, () => request, state);
    }),
    handle(setToken, (state, { payload: { type, value } }) => {
        return {
            ...state,
            [`${type}Token`]: value,
        };
    }),
]));
