import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5', // Light gray background
      paper: '#fafafa',   // Very light gray paper background
    },
    primary: {
      main: '#757575', // Gray primary color
      light: '#9e9e9e',
      dark: '#616161',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9e9e9e', // Lighter gray secondary color
      light: '#bdbdbd',
      dark: '#757575',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#424242', // Dark gray text
      secondary: '#757575', // Medium gray secondary text
    },
    divider: '#e0e0e0', // Light gray dividers
    action: {
      active: '#757575',
      hover: '#f5f5f5',
      selected: '#e0e0e0',
      disabled: '#bdbdbd',
      disabledBackground: '#f5f5f5',
    },
    error: {
      main: '#757575', // Gray instead of red
      light: '#9e9e9e',
      dark: '#616161',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#9e9e9e', // Gray instead of orange
      light: '#bdbdbd',
      dark: '#757575',
      contrastText: '#ffffff',
    },
    info: {
      main: '#757575', // Gray instead of blue
      light: '#9e9e9e',
      dark: '#616161',
      contrastText: '#ffffff',
    },
    success: {
      main: '#9e9e9e', // Gray instead of green
      light: '#bdbdbd',
      dark: '#757575',
      contrastText: '#ffffff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f5f5f5', // Light gray background
          margin: 0,
          padding: 0,
        },
        '*': {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f5f5f5',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#bdbdbd',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#9e9e9e',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fafafa',
          color: '#424242',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#fafafa',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          border: '1px solid #e0e0e0',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
        contained: {
          backgroundColor: '#757575',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#616161',
          },
        },
        outlined: {
          borderColor: '#757575',
          color: '#757575',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            borderColor: '#616161',
          },
        },
        text: {
          color: '#757575',
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#ffffff',
            '& fieldset': {
              borderColor: '#e0e0e0',
            },
            '&:hover fieldset': {
              borderColor: '#bdbdbd',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#757575',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#757575',
            '&.Mui-focused': {
              color: '#757575',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#fafafa',
          border: '1px solid #e0e0e0',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#fafafa',
          borderRight: '1px solid #e0e0e0',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#e0e0e0',
          color: '#424242',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#e0e0e0',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#757575',
          '&:hover': {
            color: '#616161',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#757575',
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: '#757575',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#616161',
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-switchBase': {
            color: '#bdbdbd',
          },
          '& .MuiSwitch-track': {
            backgroundColor: '#e0e0e0',
          },
          '& .Mui-checked': {
            color: '#757575',
            '& + .MuiSwitch-track': {
              backgroundColor: '#9e9e9e',
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#bdbdbd',
          '&.Mui-checked': {
            color: '#757575',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#bdbdbd',
          '&.Mui-checked': {
            color: '#757575',
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#757575',
        },
        thumb: {
          backgroundColor: '#757575',
        },
        track: {
          backgroundColor: '#9e9e9e',
        },
        rail: {
          backgroundColor: '#e0e0e0',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: '#e0e0e0',
        },
        bar: {
          backgroundColor: '#757575',
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#757575',
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: '#e0e0e0',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#424242',
          color: '#ffffff',
        },
        arrow: {
          color: '#424242',
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& .MuiSnackbarContent-root': {
            backgroundColor: '#fafafa',
            color: '#424242',
            border: '1px solid #e0e0e0',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: '#424242',
    },
    h2: {
      color: '#424242',
    },
    h3: {
      color: '#424242',
    },
    h4: {
      color: '#424242',
    },
    h5: {
      color: '#424242',
    },
    h6: {
      color: '#424242',
    },
    body1: {
      color: '#424242',
    },
    body2: {
      color: '#757575',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0,0,0,0.1)',
    '0 4px 8px rgba(0,0,0,0.1)',
    '0 8px 16px rgba(0,0,0,0.1)',
    '0 16px 32px rgba(0,0,0,0.1)',
    '0 32px 64px rgba(0,0,0,0.1)',
    ...Array(19).fill('none'),
  ],
});

export default theme; 