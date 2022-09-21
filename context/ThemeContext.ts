import { createContext } from 'react';

import noop from 'lodash/noop';

import type { ThemeContextValueType } from './types';

export const ThemeContext = createContext<ThemeContextValueType>({
    theme: 'light',
    toggleTheme: noop
});
