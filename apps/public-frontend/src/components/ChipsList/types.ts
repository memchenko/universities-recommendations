export interface IChipsListProps {
    options: { value: number | string; label: string; }[];
    onRemove(value: string[]): void;
}
