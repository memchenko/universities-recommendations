export interface IFetchInputProps {
    placeholder: string;
    isLoading: boolean;
    options: string[];
    onChoose(value: string): void;
    onChange(value: string): void;
}