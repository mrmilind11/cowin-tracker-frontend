import { createMuiTheme, ThemeOptions } from '@material-ui/core'

export const paletteColorsDark = {
    primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
    },
    secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
    },
}

export const paletteColorsLight = {
    primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
    },
    secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
    },
}

const options = (dark: boolean): ThemeOptions => {
    const paletteColors = dark ? paletteColorsDark : paletteColorsLight;
    return { palette: paletteColors };
    // return {
    //     palette: {
    //         type: dark ? 'dark' : 'light',
    //         primary: {
    //             main: paletteColors.primary,
    //         },
    //         secondary: {
    //             main: paletteColors.secondary
    //         },
    //         error: {
    //             main: paletteColors.error
    //         },
    //         text: {
    //            primary: paletteColors.text
    //         }

    //         // ...
    //     }
    // }
}
export const darkTheme = createMuiTheme(options(true))
export const lightTheme = createMuiTheme(options(false))