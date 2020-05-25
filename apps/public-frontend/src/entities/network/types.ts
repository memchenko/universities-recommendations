import { lens } from 'ramda';

import { Paths } from '../../constants/urls';

export enum Actions {
    Get = '@request/GET',
    Post = '@request/POST',
    Patch = '@request/PATCH',
    Put = '@request/PUT',
    Delete = '@request/DELETE',
    SetRequest = '@request/SET_REQUEST',
    GetToken = '@request/GET_TOKEN',
    SetToken = '@request/SET_TOKEN',
}

export interface IStateWithNetwork {
    network: INetworkState;
}

export interface IQueryStringData {
    [key: string]: string | number | boolean | undefined | null;
}

export interface IBodyData {
    [key: string]: string | number | boolean | IBodyData;
}

export interface IPathParamsData {
    [key: string]: string | number;
}

export interface INetworkState {
    requests: IRequest;
    accessToken: string;
    refreshToken: string;
};

export interface IRequest {
    [key: string]: IRequestData;
}

export interface IRequestData {
    status: RequestStatus;
    data?: unknown;
}

export enum RequestStatus {
    Pending,
    Success,
    Fail,
    Idle,
}

export interface IRequestKey {
    key: ReturnType<typeof lens>;
}

export interface INetworkActionArgs<T> extends IRequestKey {
    path: Paths;
    data?: T;
    pathParams?: IPathParamsData;
}

export interface ISetRequestActionArgs extends IRequestKey {
    status: RequestStatus;
    data?: unknown;
}

export interface ISetTokenArgs {
    type: 'access' | 'refresh';
    value: string;
}

export interface ITokenResponse {
    accessToken: string;
    refreshToken: string;
}
