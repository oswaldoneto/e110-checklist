import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4B9CD3',
    },
    secondary: {
      main: '#4CAF50',
    },
    background: {
      default: '#1C2B3A',
      paper: '#2A3F5A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#8B9CAF',
    },
    error: {
      main: '#D32F2F',
    },
    warning: {
      main: '#F59E0B',
    },
    success: {
      main: '#4CAF50',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#2A3F5A',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
});

export default theme; 