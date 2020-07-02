import { lens } from 'ramda';

export interface IFiltersLocationInputProps {
    lens: ReturnType<typeof lens>;
    label: string;
    onChange(value: string[]): void;
}