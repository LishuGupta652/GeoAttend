
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
