import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      // Change bg in vite config manifest to match
      main: '#8D5B4C',
    },
    secondary: {
      main: '#909CC2',
    },
    background: {
      default: '#eeeeee',
    },
  },
  typography: {
    h1: {
      fontSize: '2.3rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.6rem',
    },
    h4: {
      fontSize: '1.3rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '0.8rem',
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiFab: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: 'dense',
        size: 'small',
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiRadio: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiSwitch: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: 'dense',
        size: 'small',
      },
    },
    MuiList: {
      defaultProps: {
        dense: true,
      },
    },
    MuiMenuItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
  },
};
