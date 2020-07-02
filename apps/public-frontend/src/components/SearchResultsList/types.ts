import { EntitiesTypes } from '../../constants/entities';

export interface ISearchResultsListProps {
    data: {
        id: number;
        entity: EntitiesTypes;
        heading: string;
        description: string;
        pic: string;
    }[];
}