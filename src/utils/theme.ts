import { createTheme } from '@mui/material/styles';

export const materialUITheme = createTheme({
    palette: {
        primary: {
            light: '#8fb3ff', // Corresponding to your --primary color in light mode
            main: '#30336b', // Corresponding to your --background color in light mode
            dark: '#0d0d0c', // Corresponding to your --background color in dark mode
            contrastText: '#fff', // You can set this as appropriate
        },
        secondary: {
            light: '#ebf1ff', // Corresponding to your --secondary color in light mode
            main: '#d41d6d', // Corresponding to your --accent color in light mode
            dark: '#d41d6d', // Corresponding to your --accent color in dark mode
            contrastText: '#000', // You can set this as appropriate
        },
    },
});

export const lightTheme = {
    header: {
        nav: {
            background: "#fafafa",
            color: "#121212",
        },
    },
    colors: {
        background: "#fafafa",
        color: "#212121",
        green: "#2ecc71",
        greenTrans: "rgba(46, 204, 112, 0.1)",
        blue: "#30336b",
        red: "#ea2e91",
        footer: "#30336b",
        white: "#fafafa",
        lightBlack: "#838383",
    },
    mobile: "786px",
} as const;

export const darkTheme = {
    header: {
        nav: {
            color: "#fafafa",
            background: "#212121",
        },
    },
    colors: {
        color: "#fafafa",
        background: "#212121",
        green: "#2ecc71",
        greenTrans: "rgba(46, 204, 112, 0.4)",
        blue: "#fafafa",
        red: "#ea2e91",
        footer: "#30336b",
        white: "#fafafa",
        lightBlack: "#838383",
    },
    mobile: "786px",
} as const;
