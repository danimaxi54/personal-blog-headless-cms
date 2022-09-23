import React, {
    useState,
    useMemo,
    useContext,
    useCallback,
    useEffect
} from 'react';

import useLocalStorage from 'hooks/useLocalStorage';

import { ThemeContext } from 'context/ThemeContext';

import type { ThemeType } from 'context/types';

import type {
    ThemeProviderType,
    UseThemeReturnType
} from './types';

const ThemeProvider = ({ children }: ThemeProviderType): JSX.Element => {
    const [, setUserPreferenceTheme] = useLocalStorage<ThemeType>('theme');
    const [theme, setTheme] = useState<ThemeType>(undefined);

    const toggleTheme = useCallback(
        () => {
            setTheme(
                theme === 'dark'
                    ? 'light'
                    : 'dark'
            );
        },
        [theme]
    );

    const themeAPI = useMemo(
        () => ({
            theme,
            toggleTheme
        }),
        [
            theme,
            toggleTheme,
        ]
    );

    useEffect(
        () => {
            const root = document.documentElement;

            const initialTheme = root.style.getPropertyValue(
                '--initial-color-mode'
            );

            setTheme(
                initialTheme === 'dark'
                    ? 'dark'
                    : 'light'
            );
        },
        []
    );

    useEffect(
        () => {
            const root = document.documentElement;

            if (!theme) {
                return;
            }

            if (theme === 'dark') {
                root.setAttribute('data-theme', 'dark');

                setUserPreferenceTheme('dark');
            } else {
                root.removeAttribute('data-theme');

                setUserPreferenceTheme('light');
            }
        },
        [
            theme,
            setUserPreferenceTheme
        ]
    );

    return (
        <ThemeContext.Provider value={themeAPI}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): UseThemeReturnType => useContext(ThemeContext);

export default ThemeProvider;
