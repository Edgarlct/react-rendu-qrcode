import {createTheme, ThemeOptions} from "@mui/material";

export const muiTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: "#EBEEF0"
    },
    primary: {
      main: '#5C9EAD',
      dark: '#326273',
    },
    secondary: {
      main: '#E39774',
    }
  },
  typography: {
    h1: {
      fontSize: '4rem',
      fontFamily: "Krona One",
    }
  }
})
