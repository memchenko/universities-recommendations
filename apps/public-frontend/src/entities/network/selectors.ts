import { IStateWithNetwork, INetworkState } from './types';

export function getAccessToken(
    state: IStateWithNetwork,
): INetworkState['accessToken'] {
    return state.network.accessToken;
}

export function getRefreshToken(
    state: IStateWithNetwork,
): INetworkState['refreshToken'] {
    return state.network.refreshToken;
}