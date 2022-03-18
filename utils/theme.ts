import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export let theme = createTheme({
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      light: '#EDF7FA',
      main: '#00A8CC',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#21243D',
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',

          '@media (min-width: 600px)': {
            maxWidth: '680px',
          },
        },
        maxWidthMd: {
          maxWidth: '860px',

          '@media (min-width: 900px)': {
            maxWidth: '860px',
          },
        },
        maxWidthLg: {
          maxWidth: '900px',

          '@media (min-width: 1024px)': {
            maxWidth: '900px',
          },
        },
        maxWidthXl: {
          maxWidth: '1260px',

          '@media (min-width: 1440px)': {
            maxWidth: '1200px',
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: 'black',

          '&:hover, &.active': {
            color: '#FF6464',
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: 'white',
          },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);
