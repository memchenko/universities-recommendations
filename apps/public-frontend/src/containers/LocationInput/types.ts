import { lens } from 'ramda';

export interface ILocationInputProps {
    lens: ReturnType<typeof lens>;
    onChange(value: string): void;
}
