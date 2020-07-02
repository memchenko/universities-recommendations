import { IMultiSelectProps } from '../MultiSelect';

export interface IFiltersMultiSelectProps {
    label: string;
    placeholder: IMultiSelectProps['placeholder'];
    options: IMultiSelectProps['options'];
    onChange(value: string[]): void;
}