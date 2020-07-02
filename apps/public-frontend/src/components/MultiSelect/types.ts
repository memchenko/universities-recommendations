export interface IMultiSelectProps {
    placeholder: string;
    options: { value: number | string; label: string; }[];
    value: string[];
    onChoose(values: string[]): void;
}
