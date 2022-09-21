import type {
    Dispatch,
    SetStateAction
} from 'react';

export type LocalStorageStateValue<T> = T | undefined | null;

export type GetValueLocalStorageReturnType<T> = LocalStorageStateValue<T>;

export type UseLocalStorageReturnType<T> = [T, Dispatch<SetStateAction<T>>];
