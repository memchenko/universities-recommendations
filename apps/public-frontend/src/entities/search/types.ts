import { IQueryStringData } from '../network';

export enum Actions {
    FetchSearch = '@search/FETCH_SEARCH',
    FetchRecommendations = '@search/FETCH_RECOMMENDATIONS',
    SetResults = '@search/RESULTS',
    SetRecommendations = '@search/RECOMMENDATIONS',
}

export interface IFetchSearchActionPayload extends IQueryStringData {
    searchText?: string;
    entityType?: number;
}

export interface IFetchRecommendationsPayload extends IQueryStringData {
    universityId?: number;
    facultyId?: number;
    departmentId?: number;
    specialtyId?: number;
    lon?: number;
    lat?: number;
    paymentType?: number;
    teachingType?: number;
    teachingPriceMax?: number;
    city?: string;
    isNear?: boolean;
    scienceField?: number;
}

export interface ISearchResultBit {
    // /${entityAlias}/${entityId} = href
    entityType: number;
    entityAlias: string;
    entityId: number;
    imgSrc?: string;
    title: string;
    brief: string;
    additionalData: unknown;
}

export interface ISearchResult {
    total: number;
    limit: number;
    offset: number;
    value: ISearchResultBit[];
}

export interface ISearchState extends ISearchResult {}

export interface IStateWithSearch {
    search: ISearchState;
}
