import { createTheme, responsiveFontSizes } from "@mui/material"

let theme = createTheme ({
    palette: {
        primary: {
            main: '#141217',
        },
        secondary: {
            main: '#18181A',
        },
    },
    typography: {
        fontFamily: "-apple-system",
    },
})

theme = responsiveFontSizes(theme);

export default theme;