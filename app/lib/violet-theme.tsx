import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


// Augment the palette to include a violet color
declare module "@mui/material/styles" {
  interface Palette {
    custom: Palette["primary"];
    violet: Palette["primary"];

  }

  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
    violet?: PaletteOptions["primary"];

  }
}
// Update the Button's color options to include violet option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    violet: true;

  }
}

const violetTheme = createTheme({
  palette: {
    violet: {
      main: "#8A2BE2",
      light: "#9B45F0",
      dark: "#6A1B9A",
      contrastText: "#FFFFFF",
    },
  },
});


export default function VioletPalette() {
  return (
    <ThemeProvider theme={violetTheme}>
      <Stack sx={{ gap: 2, alignItems: 'center' }}>
        <Button variant="outlined" color="violet">
          Violet
        </Button>
        <Stack direction="row" sx={{ gap: 1 }}>
          <Stack sx={{ alignItems: 'center' }}>
            <Typography variant="body2">light</Typography>
            <Box sx={{ bgcolor: 'violet.light', width: 40, height: 20 }} />
          </Stack>
          <Stack sx={{ alignItems: 'center' }}>
            <Typography variant="body2">main</Typography>
            <Box sx={{ bgcolor: 'violet.main', width: 40, height: 20 }} />
          </Stack>
          <Stack sx={{ alignItems: 'center' }}>
            <Typography variant="body2">dark</Typography>
            <Box sx={{ bgcolor: 'violet.dark', width: 40, height: 20 }} />
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
