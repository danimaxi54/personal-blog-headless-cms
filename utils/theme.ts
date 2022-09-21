import type { GetInitialColorModeReturnType } from './types';

export function setInitialColorMode(): void {
    const getInitialColorMode = (): GetInitialColorModeReturnType => {
        const theme = localStorage.getItem('theme');

        if (theme) {
            return JSON.parse(theme);
        }

        const mediaQuery = '(prefers-color-scheme: dark)';
        const mql = window.matchMedia(mediaQuery);

        return mql.matches
            ? 'dark'
            : 'light';
    };

    const theme = getInitialColorMode();

    const root = document.documentElement;
    root.style.setProperty('--initial-color-mode', theme);

    if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
    }
}
