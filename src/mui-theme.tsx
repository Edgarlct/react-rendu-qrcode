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
      fontSize: '2.5rem',
      fontWeight: 400,
      lineHeight: '1.25em',
      fontFamily: "Krona One",
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 400,
      lineHeight: '1.25em',
      fontFamily: "Krona One",
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          height: '2.5rem',
          width: '12rem',
          borderRadius: '0.625rem',
          fontSize: '1rem',
          fontFamily: 'Krub',
          fontWeight: 400,
          // if is full width
          '&.MuiButton-fullWidth': {
            width: '100%',
          }
        },
        contained: {
          // if color is secondary
          '&.MuiButton-containedSecondary': {
            color: '#fff',
            fontsize: '1.25rem',
            fontWeight: 600,
            // if is full width
            '&.MuiButton-fullWidth': {
              width: '100%',
            }
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          cursor: "default",
          backgroundColor: '#5C9EAD',
          color: '#FFFFFF',
          borderRadius: '0.625rem',
          '&:hover': {
            backgroundColor: '#5C9EAD',
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '0.625rem',
          paddingRight: '12px',
        },
        input: {
          border: 'none',
        },
        notchedOutline: {
          border: 'solid 2px #5C9EAD',
          borderColor: '#5C9EAD !important',
          '&:hover': {
            borderColor: '#5C9EAD !important',
          }
        }
      }
    }
  }
})
