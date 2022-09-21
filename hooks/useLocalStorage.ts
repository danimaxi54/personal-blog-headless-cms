import {
    useState,
    useEffect
} from 'react';

import type {
    GetValueLocalStorageReturnType,
    UseLocalStorageReturnType,
    LocalStorageStateValue
} from './types';

const getValueLocalStorage = <T>(
    key: string
): GetValueLocalStorageReturnType<LocalStorageStateValue<T>> => {
    if (typeof window !== 'undefined') {
        const item = localStorage.getItem(key);

        if (item === null) return undefined;

        if (item === "null") return null;
        if (item === "undefined") return undefined;

        return JSON.parse(item);
    }

    return null;
};

const useLocalStorage = <T>(
    key: string,
    initialState?: T
): UseLocalStorageReturnType<LocalStorageStateValue<T>> => {
    const [value, setValue] = useState<LocalStorageStateValue<T>>(() => {
        const valueFromStorage = getValueLocalStorage<T>(key);

        return valueFromStorage || initialState;
    });

    useEffect(
        () => {
            if (value === undefined) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, JSON.stringify(value));
            }
        },
        [
            key,
            value,
        ]
    );

    return [
        value,
        setValue
    ];
};

export default useLocalStorage;
