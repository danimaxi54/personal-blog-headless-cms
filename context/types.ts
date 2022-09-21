import type { ThemeAPIType } from 'providers/types';

type InitialThemeType = undefined;
export type ThemeType = 'light' | 'dark' | InitialThemeType;

export interface ThemeContextValueType {
    theme: ThemeType;
    toggleTheme: ThemeAPIType['toggleTheme']
}
