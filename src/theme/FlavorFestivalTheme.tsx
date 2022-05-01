import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#E23E3E',
    },
    secondary: {
      main: '#f1f1f1',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});
