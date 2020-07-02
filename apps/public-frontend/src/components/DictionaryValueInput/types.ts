export interface IDictionaryValueInputProps {
    id: string;
    options: { value: number | string; label: string; }[];
    validation?: RegExp;
    placeholder: string;
    allowEmptyValue?: boolean;
    onAdd(value: { key: string | number; value: string; }): void;
}