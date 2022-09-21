import type { ThemeType } from 'context/types';

export interface BlogNavbarPropsType {
    theme: ThemeType;
    toggleTheme: () => void;
}
