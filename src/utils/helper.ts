import { THEME_TYPES } from './../types/types';

export const getInitialTheme = (): THEME_TYPES => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkModeMediaQuery.matches) {
        return "dark";
    }

    return "light";
}
