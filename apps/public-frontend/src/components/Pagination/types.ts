export interface IPaginationProps {
    active: number;
    total: number;
    onChange(value: number): void;
}
