import type { ReactNode } from 'react';

import type { ThemeType } from 'context/types';

export interface ThemeProviderType {
    children: ReactNode;
}

export interface ThemeAPIType {
    theme: ThemeType;
    toggleTheme: () => void;
}

export type UseThemeReturnType = ThemeAPIType;
