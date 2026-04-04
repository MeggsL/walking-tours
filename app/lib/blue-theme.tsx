import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// Augment the palette to include an new colors
declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
    blue: Palette["primary"];
  }

  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
    blue?: PaletteOptions["primary"];
  }
}
// Update the Button's color options to include violet and blue option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    blue: true;
  }
}

const blueTheme = createTheme({
  palette: {
    blue: {
      main: "#1976D2",
      light: "#42A5F5",
      dark: "#1565C0",
      contrastText: "#FFFFFF",
    },
  },
});

export default function ManuallyProvideBlueColor() {
  return (
    <ThemeProvider theme={blueTheme}>
      <Stack sx={{ gap: 2, alignItems: 'center' }}>
        <Button variant="contained" color="blue">
          Blue
        </Button>
        <Stack direction="row" sx={{ gap: 1 }}>
          <Stack sx={{ alignItems: 'center' }}>
            <Typography variant="body2">light</Typography>
            <Box sx={{ bgcolor: 'blue.light', width: 40, height: 20 }} />
          </Stack>
          <Stack sx={{ alignItems: 'center' }}>
            <Typography variant="body2">main</Typography>
            <Box sx={{ bgcolor: 'blue.main', width: 40, height: 20 }} />
          </Stack>
          <Stack sx={{ alignItems: 'center' }}>
            <Typography variant="body2">dark</Typography>
            <Box sx={{ bgcolor: 'blue.dark', width: 40, height: 20 }} />
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
