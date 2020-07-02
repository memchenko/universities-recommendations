import { FormEvent } from 'react';

export interface ISearchInputProps {
    onSubmit(data: FormEvent<HTMLFormElement>): void; 
}

export interface ISearchParams {
    text?: string;
}