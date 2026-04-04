import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { PurpleButton } from "@/app/lib/buttons";

function LetsGoButton() {
return (
    <ThemeProvider theme={PurpleButton}>
      <Button variant="contained" size="large" sx={{ pl: 4, pr: 4 }}>
        Let's Go!
      </Button>
    </ThemeProvider>
  );
}
export default LetsGoButton ;