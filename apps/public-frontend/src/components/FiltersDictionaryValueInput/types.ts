import { IDictionaryValueInputProps } from '../DictionaryValueInput';

export interface IFiltersDictionaryValueInputProps extends Omit<
    IDictionaryValueInputProps,
    'onAdd'
> {
    label: string;
    onChange(
        value: Parameters<IDictionaryValueInputProps['onAdd']>[0][]
    ): void;
}