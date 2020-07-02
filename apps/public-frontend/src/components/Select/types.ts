export interface ISelectProps {
    id: string;
    options: { value: string | number; label: string; }[];
    onChange(value: string | number): void;
}