import type { ThemeAPIType } from 'providers/types';
import type { ThemeType } from 'context/types';

export interface ThemeTogglePropsType {
    themeType: ThemeType;
    onChange: ThemeAPIType['toggleTheme'];
}
