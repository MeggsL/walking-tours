import { createTheme } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';

const buttonTheme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
});

export { buttonTheme };